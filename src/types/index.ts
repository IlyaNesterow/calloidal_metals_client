
export const Pages = ['silver', 'copper', 'gold', 'platinum']

interface Section {
  sectionName: string
  title?: string
}

interface SectionWithImage extends Section {
  bgImage?: string
}

interface SectionWithResizableImage extends SectionWithImage {
  bgImageWidth?: number
  bgImageHeight?: number
}

interface Argument{
  bold?: boolean
  statement: string
}

interface SubSection extends SectionWithResizableImage{
  text?: string
  arguments: Argument[]
}

export interface VideoContent{
  url: string
  description: string
}

interface PdfFile extends SectionWithResizableImage {
  url: string
  description: string
}

export interface Introduction extends SectionWithImage {
  text: string
  video?: VideoContent
}

export interface Info extends SectionWithResizableImage {
  summary: string
  pdfFile?: PdfFile
  subSections?: SubSection[]
}

export interface HowProduced extends SectionWithResizableImage {
  text: string
}

export interface Sellers extends SectionWithResizableImage {
  sellers: { name: string, url: string }[]
}

export interface OtherSources extends Section {
  urls: { url: string, label: string }[]
}

export interface Page {
  introduction: Introduction
  info: Info
  howProduced?: HowProduced
  sellers: Sellers
  otherSources?: OtherSources
}

export interface Content {
  pages: {
    silver: Page
    platinum: Page
    gold: Page
    copper: Page
  } 
}