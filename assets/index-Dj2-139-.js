(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const data = [{ "name": "Koenigsegg", "img": "Koenigsegg", "type": "Sport", "volume": 90, "persons": 2, "cost": 99, "extracost": 0, "w": 232, "h": 72 }, { "name": "Nissan GT - R", "img": "Nissan", "type": "Sport", "volume": 80, "persons": 2, "cost": 80, "extracost": 100, "w": 204, "h": 64 }, { "name": "Rolls - Royce", "img": "RR", "type": "Sedan", "volume": 70, "persons": 4, "cost": 96, "extracost": 0, "w": 220, "h": 68 }, { "name": "Nissan GT - R", "img": "Nissanb", "type": "Sport", "volume": 80, "persons": 2, "cost": 80, "extracost": 100, "w": 204, "h": 64 }, { "name": "All New Rush", "img": "Rush", "type": "SUV", "volume": 70, "persons": 6, "cost": 72, "extracost": 80, "w": 224, "h": 100 }, { "name": "CR  - V", "img": "CR", "type": "SUV", "volume": 80, "persons": 6, "cost": 80, "extracost": 0, "w": 248, "h": 100 }, { "name": "All New Terios", "img": "Terios", "type": "SUV", "volume": 90, "persons": 6, "cost": 74, "extracost": 0, "w": 224, "h": 100 }, { "name": "CR  - V ", "img": "CRb", "type": "SUV", "volume": 80, "persons": 6, "cost": 80, "extracost": 0, "w": 248, "h": 100 }, { "name": "MG ZX Exclusice", "img": "Exclusice", "type": "Hatchback", "volume": 70, "persons": 4, "cost": 76, "extracost": 80, "w": 264, "h": 108 }, { "name": "New MG ZS", "img": "MG", "type": "SUV", "volume": 80, "persons": 6, "cost": 80, "extracost": 0, "w": 288, "h": 112 }, { "name": "MG ZX Excite", "img": "Exclusice", "type": "Hatchback", "volume": 90, "persons": 4, "cost": 74, "extracost": 0, "w": 264, "h": 108 }, { "name": "New MG ZS", "img": "MGb", "type": "SUV", "volume": 80, "persons": 6, "cost": 80, "extracost": 0, "w": 288, "h": 112 }];
const data$1 = {
  data
};
console.log(data$1.data[0].name, data$1.data[0].type, data$1.data[0].img, data$1.data[0].volume, data$1.data[0].persons, data$1.data[0].cost, data$1.data[0].w, data$1.data[0].h);
function cars(x0, x1, y) {
  for (let i = x0; i < x1; i++) {
    let w = data$1.data[i].w;
    console.log(w);
    let h = data$1.data[i].h;
    console.log(h);
    let exco;
    data$1.data[i].extracost == 0 ? exco = "" : exco = `<p class="text-[16px] line-through C90A3BF">$${data$1.data[i].extracost}.00</p>`;
    let pattern = ` <div class="w-[304px] h-[388px] p-[24px] flex flex-col justify-center items-center bg-white rounded-[10px] ">
                            <div class="flex justify-between w-full">
                                <div class="flex flex-col justify-start items-start">
                                <p class="font-semibold text-2xl">${data$1.data[i].name}</p>
                                <p class="C90A3BF font-semibold">${data$1.data[i].type}</p>
                                </div>
                                <img src="./heart1.svg" id="like${i}" class="mt-[5px] cursor-pointer w-[24px] h-[24px]" alt="">
                            </div>
                            <img src="./${data$1.data[i].img}.svg" class="mt-[64px] w-[242px]! h-[92px]!" alt="">
                            <div class="mt-[64px] flex gap-[16px]">
                                <div class="flex gap-[6px]">
                                <img src="./volume.svg" class="w-[24px] h-[24px]" alt="">
                                <p class="C90A3BF text-[15px]">${data$1.data[i].volume}L</p>
                                </div>
                                <div class="flex gap-[6px]">
                                <img src="./manual.svg" class="w-[24px] h-[24px]" alt="">
                                <p class="C90A3BF text-[15px]">manual</p>
                                </div>
                                <div class="flex gap-[6px]">
                                <img src="./profile-2user.svg" class="w-[24px] h-[24px]" alt="">
                                <p class="C90A3BF text-[15px]">${data$1.data[i].persons} People</p>
                                </div>
                            </div>
                            <div class="mt-[24px] w-full flex justify-between">
                                <div class="flex flex-col">
                                <p class="font-semibold text-[20px]">$${data$1.data[i].cost}.00/ <hui class="text-[16px] C90A3BF">day</hui></p>
                                ${exco}
                                </div>
                                <button class="w-[116px] h-[44px] C3563E9BGBUTTON rounded-[4px] font-semibold text-white">Rent Now</button>
                            </div>
                        </div>`;
    document.getElementById(y).innerHTML += pattern;
  }
}
cars(0, 4, "vetrina");
cars(4, 12, "vetrina2");
function likes(id) {
  console.log(document.getElementById(id).src);
  document.getElementById(id).src == `./heart1.svg` ? document.getElementById(id).src = `./heart2.svg` : document.getElementById(id).src = `./heart1.svg`;
}
for (let i = 0; i < 12; i++) {
  const hertbutton = document.getElementById(`like${i}`);
  hertbutton.addEventListener("click", () => {
    likes(`like${i}`);
  });
}
function mobilcats(x0, x1, y) {
  for (let i = x0; i < x1; i++) {
    let w = data$1.data[i].w;
    console.log(w);
    let h = data$1.data[i].h;
    console.log(h);
    let exco;
    data$1.data[i].extracost == 0 ? exco = "" : exco = `<p class="text-[12px] line-through C90A3BF">$${data$1.data[i].extracost}.00</p>`;
    let pattern = ` <div class="w-[327px] h-[240px] bg-white rounded-[10px] flex flex-col justify-center items-center p-[16px]">
                            <div class="flex justify-between w-full">
                                <div class="flex flex-col justify-start items-start">
                                    <p class="text-[18px] font-semibold">${data$1.data[i].name}</p>
                                    <p class="C90A3BF font-semibold text-[12px]">${data$1.data[i].type}</p>
                                </div>
                                <img src="./heart1.svg" id="like${i}" class="mt-[5px] cursor-pointer w-[24px] h-[24px]" alt="">
                            </div>
                            <div class="flex justify-between mt-[13px] w-full">
                                <img src="./${data$1.data[i].img}.svg" class="w-[160px] h-[64px]" alt="">
                                <div class="flex flex-col justify-center items-start gap-16px">
                                    <div class="flex justify-center items-center gap-[4px]">
                                        <img src="./volume.svg" class="w-[14px] h-[14px]" alt="">
                                        <p class="C90A3BF text-[12px]">${data$1.data[i].volume}L</p>
                                    </div>
                                    <div class="flex justify-center items-center gap-[4px]">
                                        <img src="./manual.svg" class="w-[14px] h-[14px]" alt="">
                                        <p class="C90A3BF text-[12px]">Manual</p>
                                    </div>
                                    <div class="flex justify-center items-center gap-[4px]">
                                        <img src="./profile-2user.svg" class="w-[14px] h-[14px]" alt="">
                                        <p class="C90A3BF text-[12px]">${data$1.data[i].persons} People</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-[42px] w-full flex justify-between">
                                <div class="flex flex-col">
                                    <p class="font-semibold text-[16px]">$99.00/ <hui class="text-[12px] C90A3BF">day</hui></p>
                                    ${exco}
                                </div>
                                <button class="w-[100px] h-[36px] C3563E9BGBUTTON rounded-[4px] text-[16px] font-semibold text-white">Rent Now</button>
                            </div>
                        </div>`;
    document.getElementById(y).innerHTML += pattern;
  }
}
mobilcats(4, 9, "moda");
//# sourceMappingURL=index-Dj2-139-.js.map
