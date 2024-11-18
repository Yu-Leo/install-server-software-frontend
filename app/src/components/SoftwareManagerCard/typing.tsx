export interface ISoftwareManagerCardProps {
    id: number;
    title: string;
    summary: string;
    price: number;
    logoFilePath: string;
    updateCatalogPageFunc: () => void;
}
