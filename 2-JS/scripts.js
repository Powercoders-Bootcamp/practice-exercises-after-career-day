let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];

const authorList = document.querySelector('.author-list ul');

function createAuthorList() {

    authors.forEach(author => {

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const image = document.createElement('img');
        const name = document.createElement('h2');

        link.href = `#`;

        name.textContent = `${author.firstName} ${author.lastName}`;

        image.src = `${author.firstName}.jpg`;

        image.alt = `${author.firstName} ${author.lastName}`;

        link.appendChild(name);

        listItem.appendChild(image);

        listItem.appendChild(link);
        
        authorList.appendChild(listItem);
    });
}

createAuthorList();