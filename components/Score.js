import { useEffect } from "react";

export default function Score({score}) {
    useEffect(() => {
        const wrapper = document.querySelectorAll(".progress");
        const barCount = 50; // number of bars
        const percentDemo = (50 * {score}) / 100; // 90%
        for (let index = 0; index < barCount; index++) {
            const className = index < percentDemo ? "selected-demo" : "";
            wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
        }
        wrapper[0].innerHTML += `<p class="selected percent-text text-demo">${score}%</p>`;
    });
    return <p className="progress bg-gray-300"></p>;
}
