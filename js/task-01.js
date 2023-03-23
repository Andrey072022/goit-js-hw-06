

const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

function logitemsEl() {
itemEl.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}
Elements:${element.lastElementChild.children.length}`);
    }
    );
};
logitemsEl(itemEl);
