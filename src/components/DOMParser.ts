// Use the native browser DOMParser for RSS parsing
class CustomDOMParser {
  parseFromString(xmlString: string, mimeType: string = 'text/xml') {
    const parser = new (window as any).DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, mimeType);
    return xmlDoc;
  }
}

// Simple DOMParser interface
interface DOMParser {
  parseFromString(xmlString: string, mimeType?: string): Document;
}

// Document interface
interface Document {
  getElementsByTagName(tagName: string): Element[];
}

// Element interface
interface Element {
  getElementsByTagName(tagName: string): Element[];
  textContent: string | null;
}

export default CustomDOMParser;
