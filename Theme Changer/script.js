function setDarkorLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
}

if (localStorage.getItem("theme")) {
    document.querySelector("body").classList.add(localStorage.getItem("theme"));
} else {
    setDarkorLight();
}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    if (document.querySelector("body").classList.contains("dark")) {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");

        localStorage.setItem("theme", "light");
    } else {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");

        localStorage.setItem("theme", "dark");
    }
})

// setDarkorLight();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
        setDarkorLight();
    }
})
