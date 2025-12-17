// async function printName(name) {
//     console.log("Before");
//     await Promise.resolve();   // smallest promise
//     console.log("After:", name);
// }

// printName("Darshil");

// const hii = async (sayhelo) => {
//     console.log(start)
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     console.log("darshil", sayhelo)
// }
// sayhelo(darshil)
const hii = async (helo) => {
    console.log("start");

    await new Promise(function (resolve) {
        return setTimeout(resolve, 1000);
    });

    console.log("Hello:", helo);
};

hii("Darshil");
