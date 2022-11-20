export default (document) => {
    // BEGIN (write your solution here)
    const root = document.querySelector('.content');

    const categoryTitleElement = root.querySelector('h1');
    const categoryTitle = categoryTitleElement.innerHTML;

    const descriptionTitleElement = root.querySelector('.description');
    const descriptionTitle = descriptionTitleElement.innerHTML;

    const itemsCategory = root.querySelectorAll('.links div');
    const items = Array.from(itemsCategory).map((element) => {
        const titleElement = element.querySelector('a');
        const descriptionElement = element.querySelector('p');

        return {
            title: titleElement.innerHTML,
            description: descriptionElement.innerHTML,
        };
    });

    return {
        title: categoryTitle,
        description: descriptionTitle,
        items,
    };
    // END
};