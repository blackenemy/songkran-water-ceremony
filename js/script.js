/**
 * script.js - สคริปต์สำหรับแอนิเมชันรดน้ำพระในวันสงกรานต์
 */
document.addEventListener('DOMContentLoaded', function() {
    // เลือกอิลิเมนต์ที่ต้องการจัดการ
    const pourButton = document.getElementById('pourButton');
    const waterDrop = document.getElementById('waterDrop');
    const waterStream = document.getElementById('waterStream');
    const bowl = document.getElementById('bowl');
    const hand = document.getElementById('hand');
    
    // เพิ่มเสียงน้ำ (ถ้าต้องการ)
    // const waterSound = new Audio('sounds/water-pouring.mp3');
    
    // ดึงอิลิเมนต์ hand container
    const handContainer = document.getElementById('handContainer');
    
    // เพิ่มอีเวนต์คลิกปุ่มรดน้ำพระ
    pourButton.addEventListener('click', function() {
        // แสดงมือและขัน
        handContainer.style.opacity = 1;
        
        // เริ่มเล่นเสียง (ถ้ามี)
        // waterSound.currentTime = 0;
        // waterSound.play();
        
        // เล่นแอนิเมชันของมือที่กำลังเคลื่อนที่
        handContainer.style.animation = 'moveHand 3s ease-in-out';
        
        // เล่นแอนิเมชันการรดน้ำ
        bowl.style.animation = 'pourWater 3s ease-in-out';
        
        // เริ่มแอนิเมชันของน้ำหลังจากมือเคลื่อนที่มาถึงตำแหน่ง
        setTimeout(function() {
            waterStream.style.animation = 'streamFlow 2s ease-in-out';
            waterDrop.style.animation = 'dropFall 2s ease-in-out';
        }, 1000);
        
        // รีเซ็ตแอนิเมชันหลังจากเล่นเสร็จ
        setTimeout(function() {
            handContainer.style.animation = '';
            bowl.style.animation = '';
            waterStream.style.animation = '';
            waterDrop.style.animation = '';
            handContainer.style.opacity = 0;
            
            // หยุดเสียง (ถ้ามี)
            // waterSound.pause();
        }, 3500);
    });
    
    // ทำให้สามารถเล่นแอนิเมชันซ้ำได้หลายครั้ง
    bowl.addEventListener('animationend', function() {
        this.style.animation = '';
    });
    
    waterStream.addEventListener('animationend', function() {
        this.style.animation = '';
    });
    
    waterDrop.addEventListener('animationend', function() {
        this.style.animation = '';
    });
    
    // เพิ่มเอฟเฟกต์เมื่อโหลดหน้าเว็บเสร็จ
    setTimeout(function() {
        document.querySelector('.title').style.opacity = 1;
        document.querySelector('.buddha-container').style.opacity = 1;
        document.querySelector('.message').style.opacity = 1;
        document.querySelector('.button').style.opacity = 1;
    }, 500);
});

// ฟังก์ชันสำหรับสร้างหยดน้ำเพิ่มเติม (ถ้าต้องการเพิ่มเอฟเฟกต์)
function createWaterDrops() {
    const buddhaContainer = document.querySelector('.buddha-container');
    
    for (let i = 0; i < 10; i++) {
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        drop.style.left = `${Math.random() * 800 + 125}px`;
        drop.style.top = `${Math.random() * 300 + 150}px`;
        drop.style.animationDelay = `${Math.random() * 10}s`;
        
        buddhaContainer.appendChild(drop);
        
        setTimeout(() => {
            buddhaContainer.removeChild(drop);
        }, 3000);
    }
}