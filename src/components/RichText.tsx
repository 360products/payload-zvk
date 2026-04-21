// Minimal Lexical → HTML renderer for Payload's Lexical richText output.
// Handles common cases (paragraphs, headings, text formatting, lists, links).
// Falls back gracefully for unknown node types.

type LexicalNode = {
  type?: string;
  tag?: string;
  text?: string;
  format?: number;
  url?: string;
  fields?: any;
  children?: LexicalNode[];
  listType?: 'bullet' | 'number';
  [key: string]: any;
};

type LexicalRoot = { root?: { children?: LexicalNode[] } } | LexicalNode[] | string | null | undefined;

const FMT_BOLD = 1;
const FMT_ITALIC = 1 << 1;
const FMT_STRIKE = 1 << 2;
const FMT_UNDERLINE = 1 << 3;
const FMT_CODE = 1 << 4;

function renderText(node: LexicalNode, key: number) {
  const fmt = node.format || 0;
  let content: React.ReactNode = node.text || '';
  if (fmt & FMT_CODE) content = <code key={key}>{content}</code>;
  if (fmt & FMT_STRIKE) content = <s>{content}</s>;
  if (fmt & FMT_UNDERLINE) content = <u>{content}</u>;
  if (fmt & FMT_ITALIC) content = <em>{content}</em>;
  if (fmt & FMT_BOLD) content = <strong>{content}</strong>;
  return <span key={key}>{content}</span>;
}

function renderChildren(children?: LexicalNode[]) {
  if (!children) return null;
  return children.map((child, i) => renderNode(child, i));
}

function renderNode(node: LexicalNode, key: number): React.ReactNode {
  if (!node) return null;
  const { type } = node;

  switch (type) {
    case 'text':
      return renderText(node, key);
    case 'linebreak':
      return <br key={key} />;
    case 'paragraph':
      return <p key={key}>{renderChildren(node.children)}</p>;
    case 'heading': {
      const tag = (node.tag || 'h2') as keyof React.JSX.IntrinsicElements;
      return React.createElement(tag, { key }, renderChildren(node.children));
    }
    case 'list': {
      const Tag = node.listType === 'number' ? 'ol' : 'ul';
      return <Tag key={key}>{renderChildren(node.children)}</Tag>;
    }
    case 'listitem':
      return <li key={key}>{renderChildren(node.children)}</li>;
    case 'quote':
      return <blockquote key={key}>{renderChildren(node.children)}</blockquote>;
    case 'link': {
      const url = node.fields?.url || node.url || '#';
      return <a key={key} href={url}>{renderChildren(node.children)}</a>;
    }
    default:
      // Unknown node: render children inline if present
      return <span key={key}>{renderChildren(node.children)}</span>;
  }
}

import React from 'react';

export default function RichText({ data }: { data: LexicalRoot }) {
  if (!data) return null;
  if (typeof data === 'string') return <p>{data}</p>;
  const children =
    Array.isArray(data) ? data : (data as any)?.root?.children;
  if (!children) return null;
  return <>{children.map((c: LexicalNode, i: number) => renderNode(c, i))}</>;
}

export function plainText(data: LexicalRoot): string {
  if (!data) return '';
  if (typeof data === 'string') return data;
  const children = Array.isArray(data) ? data : (data as any)?.root?.children;
  if (!children) return '';
  const walk = (n: LexicalNode): string => {
    if (n.type === 'text') return n.text || '';
    return (n.children || []).map(walk).join('');
  };
  return children.map(walk).join(' ');
}
