

export const Pages = ['silver', 'cooper', 'gold', 'platinum']

export interface Page {
  introduction: {
    bgImage: string
    text: string
    sectionName: string
    title?: string
    videoUrl?: string
  }
  info: {
    table?: { key: string, value: string | number }[]
    bgImage?: string
    bgImageWidth?: number
    pdfFile?: string
    title?: string
    sectionName: string
  }
  howProduced?: {
    bgImage?: string
    bgImageWidth?: number
    title?: string
    text: string
    sectionName: string;
  }
  sellers: {
    title: string
    sectionName: string
    bgImage?: string
    bgImageWidth?: number
  }
  otherSources?: {
    title?: string
    urls: { url: string, label: string }[]
    sectionName: string;
  }
}

export interface Content {
  pages: Page[]
}