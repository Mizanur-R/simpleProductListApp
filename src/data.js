import shortid from 'shortid'
export const socialIcon = [
    { 
        id: shortid.generate(),
        icon: 'twitter',
        color: '#1B274C',
        tooltip: 'Twitt on twitter',
        link: 'https://twitter.com'
    },
    { 
        id: shortid.generate(),
        icon: 'facebook-f',
        color: '#1200FF',
        tooltip: 'Share on Facebook',
        link: 'https://facebook.com'
    },
    { 
        id: shortid.generate(),
        icon: 'github',
        color: '#AAB6B8',
        tooltip: 'Share on github ',
        link: 'https://github.com'
    },
    { 
        id: shortid.generate(),
        icon: 'instagram',
        color: '#810081',
        tooltip: 'Share on instagram ',
        link: 'https://instagram.com'
    }
]

export const Products = {
    breadcrumbs: [
        {
            text: 'Home',
            link: 'https://facebook.com', 
            id: shortid.generate(),
        },
        {
            text: 'Shop',
            link: 'https://facebook.com/about', 
            id: shortid.generate()
        },
        {
            text: 'Men',
            link: 'https://facebook.com/friends', 
            id: shortid.generate(),
        },
        {
            text: 'T-shirt',
            link: 'https://facebook.com/contact', 
            id: shortid.generate(),
        },
    ]
}