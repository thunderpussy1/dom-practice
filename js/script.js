const cardsContent = [
    {
        title: "Baby Unicorn",
        img1: "./image/baby/baby01.png",
        img2: "./image/baby/baby02.png",
        img3: "./image/baby/baby03.png",
        text: "Baby Unicorn cards have a purple corner. Each player starts with a Baby Unicorn card. Since Baby Unicorn cards are kept in the Nursery and are never in any player's hand, the only way to bring more Baby Unicorn cards into your Stable is through a special effect from another card."
    },
    {
        title: "Basic Unicorn",
        img1: "./image/baby/baby01.png",
        img2: "./image/baby/baby01.png",
        img3: "./image/baby/baby01.png",
        text: "Basic Unicorn cards have an indigo corner. They don't have any effects, but they might have a special place in your heart."
    },
    {
        title: "Magical Unicorn",
        img1: "./image/baby/baby01.png",
        img2: "./image/baby/baby01.png",
        img3: "./image/baby/baby01.png",
        text: "Magical Unicorn cards have a blue corner. Each Magical Unicorn card has an effect that can give you an advantage in the game."
    },
    {
        title: "Magic",
        img1: "./image/baby/baby01.png",
        img2: "./image/baby/baby01.png",
        img3: "./image/baby/baby01.png",
        text: "Magic cards have a green corner with a star symbol. These cards have a one-time effect; if you play a Magic card on your turn, immediately move it to the discard pile"
    },
    {
        title: "Downgrade",
        img1: "./image/baby/baby01.png",
        img2: "./image/baby/baby01.png",
        img3: "./image/baby/baby01.png",
        text: "Downgrade cards have a yellow corner with a down arrow symbol. Add a Downgrade card to another player's Stable to impose negative effects on that player. (Technically, you can add a Downgrade card to your own Stable, but you'll rarely want to do this.) A Downgrade card stays in a player's Stable until it is sacrificed or destroyed."
    },
    {
        title: "Instant",
        img1: "./image/baby/baby01.png",
        img2: "./image/baby/baby01.png",
        img3: "./image/baby/baby01.png",
        text: "Instant cards have a red corner with an exclamation point symbol. This is the only type of card that doesn’t have to be played on your turn. In this deck, the Instant cards are Neigh cards, which can be played any time any other player plays a card. Any number of Instant cards can be chained during a single turn."
    }
];

function changeContent(btnNum) {
    let title = document.querySelector(".content__title").textContent;
    title = cardsContent[btnNum].title;
    document.querySelector(".content__title").textContent = title;
    let text = document.querySelector(".content__text").textContent;
    text = cardsContent[btnNum].text;
    document.querySelector(".content__text").textContent = text;
    let img1 = document.querySelector(".img1");
    img1.src = cardsContent[btnNum].img1;
}