
export interface Navlink {
  url: string
  label: string
}

export type NavLinkCtx = () => React.FC | JSX.Element

export type NavLinkGenerator = (links: Navlink[]) => React.ReactFragment