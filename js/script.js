/**
 * script.js - สคริปต์สำหรับแอนิเมชันรดน้ำพระในวันสงกรานต์
 */

document.addEventListener("DOMContentLoaded", function () {
    const pourButton = document.getElementById("pourButton");
    const waterDrop = document.getElementById("waterDrop");
    const waterStream = document.getElementById("waterStream");
    const bowl = document.getElementById("bowl");
    const handContainer = document.getElementById("handContainer");
  
    // ปุ่มรดน้ำพระ
    pourButton.addEventListener("click", function () {
        pourButton.style.opacity = 0;
      // แสดงมือและขันน้ำ
      handContainer.style.opacity = 1;
      handContainer.style.animation = "moveHand 3s ease-in-out";
      bowl.style.animation = "pourWater 3s ease-in-out";
  
      // แสดงน้ำรินหลังจากมือเคลื่อน
      setTimeout(function () {
        waterStream.style.animation = "streamFlow 2s ease-in-out";
        waterDrop.style.animation = "dropFall 2s ease-in-out";
  
        // 🎉 เพิ่มดอกไม้ลอย
        createFloatingFlowers(15);
        showRandomMessage();
      }, 1000);
  
      // รีเซ็ตทั้งหมดหลังจบแอนิเมชัน
      setTimeout(function () {
        handContainer.style.animation = "";
        bowl.style.animation = "";
        waterStream.style.animation = "";
        waterDrop.style.animation = "";
        handContainer.style.opacity = 0;
        pourButton.style.opacity = 1;
      }, 3500);
    });
  
    // ป้องกันบั๊ก: รีเซ็ตแอนิเมชันเมื่อจบ
    [bowl, waterStream, waterDrop].forEach(el => {
      el.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
  
    // แสดงเนื้อหาหลังโหลด
    setTimeout(function () {
      document.querySelector(".buddha-container").style.opacity = 1;
      document.querySelector(".message").style.opacity = 1;
      document.querySelector(".button").style.opacity = 1;
    }, 500);
  });
  
  // 🎊 ดอกไม้ลอยขึ้นจากด้านล่างแบบสุ่ม
  function createFloatingFlowers(count) {
    const container = document.getElementById("flowerContainer");
  
    for (let i = 0; i < count; i++) {
      const flower = document.createElement("div");
      flower.className = "flower-1";
  
      const size = Math.random() * 20 + 30; // 30–50px
      flower.style.width = `${size}px`;
      flower.style.height = `${size}px`;
  
      const left = Math.random() * 100; // 0–100%
      flower.style.left = `${left}%`;
  
      const delay = Math.random() * 2;
      flower.style.animationDelay = `${delay}s`;
  
      const duration = 3 + Math.random() * 3; // 3–6s
      flower.style.animationDuration = `${duration}s`;
  
      container.appendChild(flower);
  
      // ลบออกเมื่อจบแอนิเมชัน
      setTimeout(() => {
        container.removeChild(flower);
      }, duration * 1000 + delay * 1000 + 1000);
    }
  }

  const messages = [
    "สาธุ... ขอให้ทุกท่านมีความสุขวันปีใหม่ไทย 🎉",
    "สาธุ... สุขภาพแข็งแรง ร่ำรวยเงินทอง 💰",
    "สาธุ... ขอให้โชคดี มีแต่สิ่งดี ๆ เข้ามา 🍀",
    "สาธุ... คิดสิ่งใดขอให้สมปรารถนา 💖",
    "สาธุ... มีความสุข ความเจริญทั้งครอบครัว 🏡",
    "สาธุ... พบแต่ความรักและมิตรภาพที่ดี 🕊️"
  ];
  
  function showRandomMessage() {
    const messageBox = document.getElementById("randomMessage");
    const randomText = messages[Math.floor(Math.random() * messages.length)];
    messageBox.textContent = randomText;
    messageBox.classList.add("show");
  
    // ซ่อนข้อความหลัง 4 วินาที
    setTimeout(() => {
      messageBox.classList.remove("show");
    }, 4000);
  }