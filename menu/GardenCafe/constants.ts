import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
    {
        id: "coffee",
        title: "Coffee / Սուրճ",
        items: [
            {
                name: "Cappuccino / Կապուչինո",
                price: "600֏",
                desc: "Espresso with milk / Էսպրեսսո կաթով",
                img: "https://picsum.photos/300/300?random=1"
            },
            {
                name: "Latte / Լատտե",
                price: "700֏",
                desc: "Milk & Espresso / Կաթ և Էսպրեսսո",
                img: "https://picsum.photos/300/300?random=2"
            },
            {
                name: "Espresso / Էսպրեսսո",
                price: "500֏",
                desc: "Hot water & coffee beans / Տաք ջուր և սուրճի հատիկներ",
                img: "https://picsum.photos/300/300?random=3"
            }
        ]
    },
    {
        id: "hot_dishes",
        title: "Hot dishes / Տաք ուտեստներ",
        items: [
            {
                name: "Qabab 1kg / Տավարի քաբաբ 1կգ",
                price: "1000֏",
                desc: "Roasted meat / Տավարի խորոված միս",
                img: "https://picsum.photos/300/300?random=4"
            }
        ]
    },
    {
        id: "desserts",
        title: "Desserts / Աղանդեր",
        items: [
             {
                name: "Cheesecake / Չիզքեյք",
                price: "1200֏",
                desc: "Classic creamy cheesecake / Դասական սերուցքային չիզքեյք",
                img: "https://picsum.photos/300/300?random=5",
                badge: "New"
            },
            {
                name: "Brownie / Բրաունի",
                price: "900֏",
                desc: "Chocolate fudge cake / Շոկոլադե տորթ",
                img: "https://picsum.photos/300/300?random=6"
            }
        ]
    },
    {
        id: "cold_drinks",
        title: "Cold Drinks / Սառը Ըմպելիքներ",
        items: [
             {
                name: "Ice Latte / Սառը Լատտե",
                price: "850֏",
                desc: "Chilled espresso with milk / Սառեցված էսպրեսսո կաթով",
                img: "https://picsum.photos/300/300?random=7"
            },
            {
                name: "Lemonade / Լիմոնադ",
                price: "1000֏",
                desc: "Fresh citrus mix / Թարմ ցիտրուսային միքս",
                img: "https://picsum.photos/300/300?random=8"
            }
        ]
    }
];