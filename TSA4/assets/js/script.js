document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const cardsContainer = document.querySelector('.cards-container');
    const detailView = document.querySelector('.detail-view');

    const restaurantData = {
        'Gabel Loffel': {
            title: 'Gabel Loffel',
            address: '235 Glendale Ave. Meridien City\nT: 490 49 4000\nW: Gandg Res',
            hours: 'Category: Swiss\nOpen: 10AM to 10PM\nPrice: $$$',
            image: 'assets/img/clicked/1.jpg',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.\n\nDonec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.'
        },
        'Gary Gari': {
            title: 'Gary Gari',
            address: '76 No. Highland Ave., Meridien City\nT: 490 24 6709\nW: Gandg Res',
            hours: 'Category: Japanese\nOpen: 5PM to 10PM\nPrice: $$',
            image: 'assets/img/clicked/2.jpg',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.\n\nDonec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.'
        },
        'Il Piatto': {
            title: 'Il Piatto',
            address: '1213 Shoutout Way Meridien City\nT: 490 42 1204\nW: IlPiatto Res',
            hours: 'Category: Italian\nOpen: 11AM to 11PM\nPrice: $$',
            image: 'assets/img/clicked/3.jpg',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.\n\nDonec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.'
        },
        'Pierre Platters': {
            title: 'Pierre Platters',
            address: '68 8th Ave, Meridien City\nT: 490 69 3080\nW: PierreRes',
            hours: 'Category: Fushion\nOpen: 11AM to 11PM\nPrice: $$$',
            image: 'assets/img/clicked/4.jpg',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.\n\nDonec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.'
        }
    };

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const restaurantTitle = card.querySelector('.card-title').textContent;
            const data = restaurantData[restaurantTitle];
        
            detailView.querySelector('.restaurant-title').textContent = data.title;
            detailView.querySelector('.detail-title').textContent = data.title;
            detailView.querySelector('.img-fluid').src = data.image;
            detailView.querySelector('.address').textContent = data.address;
            detailView.querySelector('.hours').textContent = data.hours;
            detailView.querySelector('.paragraph-section p').textContent = data.fullDescription;

            cardsContainer.classList.add('hidden');
            detailView.classList.add('active');
        });
    });

    document.querySelector('.btn-primary').addEventListener('click', function() {
        cardsContainer.classList.remove('hidden');
        detailView.classList.remove('active');
    });
});