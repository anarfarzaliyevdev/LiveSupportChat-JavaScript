"use strict";

let chat_bottom = document.querySelector(".chat-top-bottom");
let divTag;
let imgTag;
let spanTag;

let input = document.querySelector("input");
let send_icon = document.querySelector(".send-icon");
let openChat = document.querySelector(".chat-opener");
let chat = document.querySelector(".chat");
let trash_icon = document.querySelector(".fa-trash-alt");
let chat_box = document.querySelector(".chat-box");
let chat_boxes = document.querySelectorAll(".chat_box");

// Chat opener written here
openChat.addEventListener("click", function() {
  chat.classList.add("chat-active");
  openChat.classList.add("chat-opener-hidden");
});
//Message sender icon written here

send_icon.addEventListener("click", function() {
  if (input.value[0] == input.value[0].toUpperCase()) {
    divTag = document.createElement("div");
    imgTag = document.createElement("img");
    imgTag.src = "asserts/images/chat.png";

    spanTag = document.createElement("span");
    spanTag.innerText = input.value;
    divTag.append(imgTag);
    divTag.append(spanTag);
    divTag.classList.add("chat-box");
    chat_bottom.append(divTag);
    input.value = "";
  } else if (input.value[0] == input.value[0].toLowerCase()) {
    divTag = document.createElement("div");
    imgTag = document.createElement("img");
    imgTag.src = "asserts/images/user.png";
    imgTag.classList.add("image");
    spanTag = document.createElement("span");
    spanTag.innerText = input.value;
    divTag.append(spanTag);
    divTag.append(imgTag);
    divTag.classList.add("active");
    divTag.classList.add("chat-box");

    chat_bottom.append(divTag);
    input.value = "";
    trash_icon = document.querySelector(".fa-trash-alt");
  }

  let images = document.querySelectorAll(".chat-box img");
  let boxes = document.querySelectorAll(".chat-box");
  let trashes = document.querySelectorAll(".active2");
  let count = boxes.length;
  for (let i = 0; i < boxes.length; i++) {
    images[i].addEventListener("click", function() {
      this.parentElement.classList.add("active2");

      trash_icon.classList.add("fa-trash-alt-visible");

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains("active2")) {
          images[i].addEventListener("click", function() {
            boxes[i].classList.remove("active2");
            trash_icon.classList.remove("fa-trash-alt-visible");
          });
          trash_icon.addEventListener("click", function() {
            for (let i = 0; i < boxes.length; i++) {
              if (boxes[i].classList.contains("active2")) {
                boxes[i].remove();
              }
            }
          });
        }
      }
    });
  }
});

//Input enter send written here
input.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
    if (input.value[0] == input.value[0].toUpperCase()) {
      divTag = document.createElement("div");
      imgTag = document.createElement("img");
      imgTag.src = "asserts/images/chat.png";

      spanTag = document.createElement("span");
      spanTag.innerText = input.value;
      divTag.append(imgTag);
      divTag.append(spanTag);
      divTag.classList.add("chat-box");
      chat_bottom.append(divTag);
      input.value = "";
    } else if (input.value[0] == input.value[0].toLowerCase()) {
      divTag = document.createElement("div");
      imgTag = document.createElement("img");
      imgTag.src = "asserts/images/user.png";
      imgTag.classList.add("image");
      spanTag = document.createElement("span");
      spanTag.innerText = input.value;
      divTag.append(spanTag);
      divTag.append(imgTag);
      divTag.classList.add("active");
      divTag.classList.add("chat-box");

      chat_bottom.append(divTag);
      input.value = "";
      trash_icon = document.querySelector(".fa-trash-alt");
    }

    let images = document.querySelectorAll(".chat-box img");
    let boxes = document.querySelectorAll(".chat-box");
    let trashes = document.querySelectorAll(".active2");
    let count = boxes.length;
    for (let i = 0; i < boxes.length; i++) {
      images[i].addEventListener("click", function() {
        this.parentElement.classList.add("active2");

        trash_icon.classList.add("fa-trash-alt-visible");

        for (let i = 0; i < boxes.length; i++) {
          if (boxes[i].classList.contains("active2")) {
            images[i].addEventListener("click", function() {
              boxes[i].classList.remove("active2");
              trash_icon.classList.remove("fa-trash-alt-visible");
            });
            trash_icon.addEventListener("click", function() {
              for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].classList.contains("active2")) {
                  boxes[i].remove();
                }
              }
            });
          }
        }
      });
    }
  }
});
