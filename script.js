// Create a carousel with Vue.js 

(() => {
const { createApp } = Vue;

createApp({

    // Status of the app (data) 
    data() {
        return {
            // Array of objects with the elements of the carousel 
            // Start creating an array of literal objects
            // Each object will have an image, title and description
            carousel:
            [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    index: 0
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    index: 1
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    index: 2
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    index: 3
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    index: 4
                }
            ], 

            // Index of the current element of the carousel
            activeIndex: 0
        }  
    },

    // Methods of the app
    methods: {

        // Method to change the current element of the carousel to the previous one
        getPrevious() {
            // I need to take into account the edge case, what to do if I'm at the first element, and I want to go to the previous one, which will be the last element of the array

            // Check if the active index is at the first element
            if (this.activeIndex === 0) {
                // If so, set the active index to the last element of the carousel
                this.activeIndex = this.carousel.length - 1;
            }
            else {
                // If not at the first element, decrement the active index by 1
                this.activeIndex--;
            }
        },

        // Method to change the current element of the carousel
        getNext() {
            // I need to take into account the edge case, what to do if I'm at the last element, and I want to go to the next one, which will be the first element of the array

            // Check if the active index is at the last element
            if (this.activeIndex === this.carousel.length - 1) {
                // If so, set the active index to the first element of the carousel
                this.activeIndex = 0;
            }
            else {
                // If not at the last element, increment the active index by 1
                this.activeIndex++;
            }
        },

        // Method to check if item is active
        isActive(index) {
            return index === this.activeIndex;
        },

        // Method to change the current element of the carousel to the one clicked on the thumbnails
        goToThumbnail(newIndex) {
            // Set the active index to the index of the thumbnail clicked
            this.activeIndex = newIndex;
        }

    }

}).mount('#app')

})();
