export interface MenuItem {
    name: string;
    price: string;
    desc: string;
    img: string;
    badge?: string;
}

export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
}