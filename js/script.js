document.addEventListener('DOMContentLoaded', () => {

    const upperCase = (string) => string.toUpperCase();

    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];

    const iconsContent = document.querySelector('.icons-content');

    const printIcons = (array) => {
        
        array.forEach((icon) => {

            const { name, prefix, type, family } = icon;

            iconsContent.innerHTML += `
                <div class="col icon-box">
                    <div class="icon-box-inner">
                        <i class="${family} ${prefix}${name} ${type} icon-item"></i>
                        <div class="icon-name">${upperCase(name)}</div>
                    </div>
                </div>
                `
        })
    }

    printIcons(icons);
        
    let userSelection = document.querySelector('#icons');

    userSelection.addEventListener('change', (event) => {

        iconsContent.innerHTML = "";

        const choosenIcons = icons.filter((icon) => {

                return event.target.value === 'all' || event.target.value === icon.type;

        })
            
        printIcons(choosenIcons);
        
    })

})