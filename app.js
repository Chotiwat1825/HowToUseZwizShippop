/**
 * คู่มือแนวทางการใช้งาน Zwiz & Shippop สำหรับพนักงานขาย (ร้านมรุกข)
 * ออกแบบให้พอดี 1 หน้าจอ (ไม่ต้องเลื่อนลงไปหาปุ่ม) ตัวหนังสือใหญ่หนา ปุ่มใหญ่ สมูททุกการกด
 */

const MANUAL_CATEGORIES = [
  {
    id: 'zwiz-ship',
    number: '1',
    title: 'วิธีส่งพัสดุผ่านระบบ Zwiz',
    summary: 'ตั้งแต่เปิดแชทลูกค้า คัดลอกที่อยู่ เลือกขนส่ง จนถึงปริ้นใบปะหน้าพัสดุ',
    color: 'indigo',
    steps: [
      {
        stepNumber: 1,
        title: 'เข้าหน้ารวมแชท',
        description: 'กดที่เมนู "รวมแชท" แถบสีชมพูด้านซ้ายมือ',
        tip: 'สังเกตลูกศรสีแดงชี้ไปที่คำว่า "รวมแชท" ด้านซ้าย',
        image: 'assets/slides/zwiz-ship/slide_01.png'
      },
      {
        stepNumber: 2,
        title: 'เลือกแชทลูกค้า',
        description: 'กดเลือกชื่อแชทของลูกค้าที่ต้องการจัดส่งสินค้าจากรายการตรงกลาง',
        tip: 'คลิกที่ชื่อลูกค้าเพื่อเปิดดูข้อความและที่อยู่',
        image: 'assets/slides/zwiz-ship/slide_02.png'
      },
      {
        stepNumber: 3,
        title: 'ไปที่แท็บ "สรุปออเดอร์"',
        description: 'มองไปที่มุมขวาบน แล้วกดที่คำว่า "สรุปออเดอร์"',
        tip: 'อยู่ถัดจากคำว่า การติดตามลูกค้า ด้านขวาบน',
        image: 'assets/slides/zwiz-ship/slide_03.png'
      },
      {
        stepNumber: 4,
        title: 'ก็อปที่อยู่ลูกค้า แล้วกดปุ่มดินสอ',
        description: '1) คัดลอก (ก็อป) ที่อยู่ลูกค้าจากในแชท  2) กดปุ่มรูป "ดินสอ" ด้านขวามือเพื่อเข้าไปเพิ่มที่อยู่',
        tip: 'คัดลอกทั้งชื่อ เบอร์โทร และที่อยู่ของลูกค้าให้ครบ',
        image: 'assets/slides/zwiz-ship/slide_04.png'
      },
      {
        stepNumber: 5,
        title: 'กดวางที่อยู่ เช็คที่อยู่ แล้วกดบันทึก',
        description: '1) กดปุ่มสีเขียว "วางที่อยู่"  2) เช็คชื่อ เบอร์โทร รหัสไปรษณีย์ให้ถูกต้อง  3) เลื่อนลงมากดปุ่มสีชมพู "บันทึก"',
        tip: 'เช็คเบอร์โทรศัพท์และรหัสไปรษณีย์ทุกครั้งก่อนกดบันทึก',
        image: 'assets/slides/zwiz-ship/slide_05.png'
      },
      {
        stepNumber: 6,
        title: 'กดปุ่ม "สรุปออเดอร์" สีเขียว เพื่อไปหน้าส่งพัสดุ',
        description: 'หลังจากบันทึกที่อยู่แล้ว ให้กดปุ่มกรอบสีเขียว "สรุปออเดอร์" ด้านขวาบน',
        tip: 'ปุ่มจะอยู่ข้างๆ หมายเลขสั่งซื้อ',
        image: 'assets/slides/zwiz-ship/slide_06.png'
      },
      {
        stepNumber: 7,
        title: 'เช็คชื่อลูกค้า เช็คที่อยู่ และเลือกขนส่ง',
        description: 'ตรวจสอบ 1) ชื่อลูกค้า  2) ที่อยู่จัดส่ง  3) กดเลือกขนส่งที่ต้องการส่ง (เช่น BEST Express หรือ EMS)',
        tip: 'ถ้าที่อยู่ผิด สามารถกดรูปดินสอเพื่อแก้ไขได้',
        image: 'assets/slides/zwiz-ship/slide_07.png'
      },
      {
        stepNumber: 8,
        title: 'ติ๊กเลือกออเดอร์ แล้วกดปุ่ม "ส่งกับ SHIPPOP"',
        description: '1) ติ๊กถูกหน้าออเดอร์ที่ต้องการจะส่ง  2) กดปุ่มสีฟ้า "ส่งกับ SHIPPOP" ด้านบน',
        tip: 'สามารถติ๊กเลือกส่งหลายออเดอร์พร้อมกันได้',
        image: 'assets/slides/zwiz-ship/slide_08.png'
      },
      {
        stepNumber: 9,
        title: 'กดปุ่ม "ถัดไป"',
        description: 'ตรวจสอบรายการที่เลือก แล้วกดปุ่มสีชมพู "ถัดไป" ด้านล่างขวา',
        tip: 'ตรวจสอบว่าติ๊กถูกหน้ารายการครบถ้วน',
        image: 'assets/slides/zwiz-ship/slide_09.png'
      },
      {
        stepNumber: 10,
        title: 'เช็ครอบสุดท้าย (1.ที่อยู่ 2.ขนส่ง 3.กดถัดไป)',
        description: 'เช็ครอบสุดท้ายเพื่อความถูกต้อง: ดู 1) ที่อยู่ลูกค้า  2) ขนส่งที่เลือก  แล้ว 3) กดปุ่มสีชมพู "ถัดไป"',
        tip: 'สำคัญมาก! เมื่อกดถัดไปแล้วระบบจะออกเลขพัสดุทันที',
        image: 'assets/slides/zwiz-ship/slide_10.png'
      },
      {
        stepNumber: 11,
        title: 'ปริ้นใบปะหน้าพัสดุ',
        description: 'กดปุ่มสีชมพู "ปริ้นใบปะหน้าพัสดุ" เพื่อสั่งพิมพ์ใบปะหน้านำไปติดกล่องสินค้า',
        tip: 'เสร็จสิ้นขั้นตอนการส่งพัสดุใน Zwiz',
        image: 'assets/slides/zwiz-ship/slide_11.png'
      }
    ]
  },
  {
    id: 'check-status',
    number: '2',
    title: 'วิธีดูสถานะการจัดส่งสินค้า',
    summary: 'วิธีดูว่าสินค้าอยู่ในขั้นตอนไหน เหลือออเดอร์ไหนที่ยังไม่ได้ส่ง',
    color: 'emerald',
    steps: [
      {
        stepNumber: 1,
        title: 'เข้าเมนู "ร้านค้า/เซลเพจ" แล้วกด "สรุปออเดอร์"',
        description: '1) กดที่เมนู "ร้านค้า/เซลเพจ" ด้านซ้ายมือ  2) กดที่กล่อง "สรุปออเดอร์"',
        tip: 'ใช้หน้านี้เพื่อดูรายการออเดอร์ทั้งหมดของร้าน',
        image: 'assets/slides/check-status/slide_01.png'
      },
      {
        stepNumber: 2,
        title: 'เลือกวันที่ย้อนหลัง และเลือกสถานะที่ต้องการดู',
        description: 'แถวบนเลือกวันที่ได้ว่าจะดูย้อนหลังกี่วัน ส่วนแถวล่างกดเลือกสถานะได้ เช่น "จ่ายแล้ว", "ส่งแล้ว", หรือ "ยกเลิก"',
        tip: 'ถ้าจะดูออเดอร์ที่ลูกค้าโอนแล้วแต่ยังไม่ส่ง ให้กดคำว่า "จ่ายแล้ว"',
        image: 'assets/slides/check-status/slide_02.png'
      },
      {
        stepNumber: 3,
        title: 'เช็คสถานะรายออเดอร์',
        description: 'ดูที่ช่องด้านขวามือของแต่ละรายการ จะบอกว่าออเดอร์นั้นอยู่ในสถานะไหน (เช่น จ่ายแล้ว หรือ ส่งแล้ว)',
        tip: 'กดปุ่ม "ดูรวมแชท" สีชมพูเพื่อเปิดดูแชทของลูกค้ารายนั้นได้ทันที',
        image: 'assets/slides/check-status/slide_03.png'
      }
    ]
  },
  {
    id: 'reprint-cover',
    number: '3',
    title: 'วิธีดูใบปะหน้าพัสดุย้อนหลัง',
    summary: 'วิธีดาวน์โหลดใบปะหน้าพัสดุย้อนหลัง กรณีลืมปริ้นหรือต้องการปริ้นซ้ำ',
    color: 'amber',
    steps: [
      {
        stepNumber: 1,
        title: 'เข้าเมนู "ร้านค้า/เซลเพจ" แล้วกด "สรุปออเดอร์"',
        description: '1) กดที่เมนู "ร้านค้า/เซลเพจ" ด้านซ้ายมือ  2) กดที่กล่อง "สรุปออเดอร์"',
        tip: 'ดูตามหมายเลข 1 และ 2 ในภาพ',
        image: 'assets/slides/reprint-cover/slide_01.png'
      },
      {
        stepNumber: 2,
        title: 'กดปุ่มลูกศรเล็กๆ ข้างปุ่ม "ส่งกับ SHIPPOP"',
        description: 'มองหาปุ่มสีฟ้า "ส่งกับ SHIPPOP" แล้วกดที่ "ลูกศรชี้ลง" ที่อยู่ด้านขวาของปุ่มสีฟ้า',
        tip: 'กดตรงลูกศรสามเหลี่ยมด้านขวาตามกรอบสีแดงในภาพ',
        image: 'assets/slides/reprint-cover/slide_02.png'
      },
      {
        stepNumber: 3,
        title: 'กดปุ่มสีชมพู "DOWNLOAD" เพื่อดาวน์โหลดใบปะหน้า',
        description: 'เลือกดูตามวันและเวลาที่ส่ง แล้วกดปุ่มสีชมพู "DOWNLOAD" เพื่อเปิดใบปะหน้าพัสดุได้เลย',
        tip: 'สามารถกดปริ้นซ้ำได้ทันทีหลังจากดาวน์โหลด',
        image: 'assets/slides/reprint-cover/slide_03.png'
      }
    ]
  },
  {
    id: 'cancel-order',
    number: '4',
    title: 'วิธียกเลิกสินค้า & สร้างคำสั่งซื้อใหม่',
    summary: 'การยกเลิกทั้งใน Zwiz และ Shippop พร้อมวิธีพิมพ์ #รับยอด เพื่อเปิดบิลส่งใหม่',
    color: 'rose',
    steps: [
      {
        stepNumber: 1,
        title: 'ต้องไปยกเลิกทั้งใน Zwiz และใน Shippop',
        description: 'เมื่อต้องการยกเลิกสินค้าที่กดส่งไปแล้ว เราต้องทำทั้ง 2 ที่ คือในระบบ Zwiz และแจ้งยกเลิกใน LINE Shippop',
        tip: 'ห้ามยกเลิกแค่ที่เดียว เพื่อป้องกันการถูกคิดค่าขนส่งซ้ำ',
        image: 'assets/slides/cancel-order/slide_01.png'
      },
      {
        stepNumber: 2,
        title: 'เข้าหน้ารวมแชท > เลือกแชท > ไปหน้าสรุปออเดอร์',
        description: '1) กดเข้า "รวมแชท"  2) เลือกแชทลูกค้าที่จะยกเลิก  3) กดปุ่มสีเขียว "สรุปออเดอร์" ด้านขวาบน',
        tip: 'ทำตามลำดับลูกศรในภาพ',
        image: 'assets/slides/cancel-order/slide_02.png'
      },
      {
        stepNumber: 3,
        title: 'ก็อปเลขพัสดุ (SP...) ไปแจ้งยกเลิกใน LINE Shippop',
        description: 'คัดลอกเลขพัสดุที่ขึ้นต้นด้วย SP (ในกรอบสีแดง) แล้วส่งไปในแชท LINE ของ "SHIPPOP" เพื่อให้เจ้าหน้าที่ยกเลิกรายการให้',
        tip: 'แจ้งแอดมินใน LINE Shippop ว่าขอยกเลิกเลขพัสดุนี้',
        image: 'assets/slides/cancel-order/slide_03.png'
      },
      {
        stepNumber: 4,
        title: 'กลับมาที่เว็บ Zwiz กดที่ช่องคำว่า "ส่งแล้ว"',
        description: 'ในหน้าสรุปออเดอร์ของ Zwiz ให้คลิกที่กล่องข้อความคำว่า "ส่งแล้ว" ทางด้านขวามือ',
        tip: 'คลิกตามกรอบสีแดงเพื่อเปิดเมนูเปลี่ยนสถานะ',
        image: 'assets/slides/cancel-order/slide_04.png'
      },
      {
        stepNumber: 5,
        title: 'กดเลือกไปที่คำว่า "ยกเลิก"',
        description: 'เมื่อเมนูเปิดออกมา ให้คลิกเลือกคำว่า "ยกเลิก" ที่อยู่ด้านล่างสุด',
        tip: 'บิลเดิมจะถูกเปลี่ยนสถานะเป็นยกเลิก',
        image: 'assets/slides/cancel-order/slide_05.png'
      },
      {
        stepNumber: 6,
        title: 'ออเดอร์ที่ยกเลิกจะถูกย้ายมาที่แท็บ "ยกเลิก"',
        description: 'บิลที่กดยกเลิกแล้วจะย้ายมาอยู่ในหัวข้อ "ยกเลิก" ด้านบนโดยอัตโนมัติ',
        tip: 'หากต้องการเปิดบิลใหม่เพื่อส่งให้ลูกค้าอีกครั้ง ให้ดูขั้นตอนถัดไป',
        image: 'assets/slides/cancel-order/slide_06.png'
      },
      {
        stepNumber: 7,
        title: 'กลับมาที่เมนู "รวมแชท"',
        description: 'กดที่เมนู "รวมแชท" แถบสีชมพูด้านซ้ายมือ เพื่อกลับไปที่ห้องแชทของลูกค้า',
        tip: 'เราจะไปสร้างคำสั่งซื้อใหม่ในแชทลูกค้า',
        image: 'assets/slides/cancel-order/slide_07.png'
      },
      {
        stepNumber: 8,
        title: 'พิมพ์ "#รับยอด (จำนวนเงิน)" แล้วรีเฟรชหน้าเว็บ 1 ครั้ง',
        description: '1) ในช่องแชทลูกค้า พิมพ์ #รับยอด ตามด้วยจำนวนเงิน (เช่น #รับยอด 100)  2) รีเฟรชหน้าเว็บ 1 ครั้ง จะเห็นคำสั่งซื้อใหม่ขึ้นมาทางขวา แล้วกรอกที่อยู่ส่งใหม่ได้เลย',
        tip: 'กดปุ่มคัดลอกคำว่า #รับยอด 100 ด้านขวาบนเพื่อนำไปวางได้เลย',
        copyCommand: '#รับยอด 100',
        image: 'assets/slides/cancel-order/slide_08.png'
      }
    ]
  },
  {
    id: 'shippop-web',
    number: '5',
    title: 'วิธีใช้งานเว็บ Shippop โดยตรง',
    summary: 'วิธีสร้างรายการส่งพัสดุในเว็บ Shippop (เปลี่ยนที่อยู่เป็นมรุกข) และวิธีพิมพ์ใบปะหน้าซ้ำ',
    color: 'indigo',
    steps: [
      {
        stepNumber: 1,
        title: 'กดที่เมนู "รายการส่งของ" แล้วเลือก "สร้างรายการ"',
        description: 'ในหน้าเว็บ Shippop ให้กดที่คำว่า "รายการส่งของ" ด้านบน แล้วคลิก "สร้างรายการ"',
        tip: 'ดูตามกรอบสีแดงด้านบนขวา',
        image: 'assets/slides/shippop-web/slide_01.png'
      },
      {
        stepNumber: 2,
        title: 'กดปุ่ม "เลือกที่อยู่" เพื่อเปลี่ยนผู้ส่งเป็น "มรุกข"',
        description: 'ในหัวข้อ ต้นทาง / ผู้จัดส่ง ให้กดปุ่ม "เลือกที่อยู่" เพื่อเปลี่ยนชื่อผู้ส่งให้เป็นร้านมรุกข',
        tip: 'สำคัญมาก! อย่าลืมเปลี่ยนที่อยู่ต้นทางเป็นร้านมรุกขทุกครั้ง',
        image: 'assets/slides/shippop-web/slide_02.png'
      },
      {
        stepNumber: 3,
        title: 'กดปุ่มสีฟ้า “ใช้ที่อยู่นี้” ของร้านมรุกข',
        description: 'มองหาชื่อ "มรุกข" แล้วกดปุ่มสีฟ้าคำว่า "ใช้ที่อยู่นี้"',
        tip: 'ที่อยู่ผู้ส่งจะเปลี่ยนเป็นของร้านมรุกขทันที',
        image: 'assets/slides/shippop-web/slide_03.png'
      },
      {
        stepNumber: 4,
        title: 'กรอกชื่อ เบอร์โทร ที่อยู่ลูกค้าปลายทาง แล้วกด "บันทึก"',
        description: 'กรอกชื่อ เบอร์โทร ที่อยู่ และรหัสไปรษณีย์ของลูกค้าผู้รับให้ครบถ้วน แล้วกดปุ่มสีฟ้า "บันทึก" ด้านล่าง',
        tip: 'เช็คเบอร์โทรและรหัสไปรษณีย์ให้ถูกต้องก่อนกดบันทึก',
        image: 'assets/slides/shippop-web/slide_04.png'
      },
      {
        stepNumber: 5,
        title: 'กดปุ่มสีส้ม "เลือกขนส่ง"',
        description: 'กดปุ่มสีส้ม "เลือกขนส่ง" แล้วเลือกบริษัทขนส่งที่ต้องการจะส่ง',
        tip: 'เลือกขนส่งตามที่ต้องการใช้งาน',
        image: 'assets/slides/shippop-web/slide_05.png'
      },
      {
        stepNumber: 6,
        title: 'กดปุ่มสีส้ม "ยืนยัน" มุมขวาล่าง',
        description: 'เมื่อเลือกขนส่งเสร็จแล้ว ให้กดปุ่มสีส้ม "ยืนยัน" ที่มุมขวาล่างของหน้าจอ',
        tip: 'ระบบจะออกเลขพัสดุและใบสั่งซื้อให้ทันที',
        image: 'assets/slides/shippop-web/slide_06.png'
      },
      {
        stepNumber: 7,
        title: 'กดปุ่มสีฟ้า "พิมพ์ใบปะหน้า"',
        description: 'เมื่อทำรายการเรียบร้อยแล้ว ให้กดปุ่มสีฟ้า "พิมพ์ใบปะหน้า" ตรงกลางหน้าจอเพื่อปริ้นใบปะหน้าติดกล่อง',
        tip: 'ปริ้นใบจัดส่งสินค้าให้พนักงานขนส่งเซ็นรับพัสดุด้วยทุกครั้ง',
        image: 'assets/slides/shippop-web/slide_07.png'
      },
      {
        stepNumber: 8,
        title: '(กรณีต้องการพิมพ์ใบปะหน้าใหม่) กดเมนู "พิมพ์ใบจัดส่ง/ใบปะหน้า"',
        description: 'ถ้าต้องการปริ้นใบปะหน้าย้อนหลัง ให้กดที่เมนู "รายการส่งของ" ด้านบน แล้วเลือก "พิมพ์ใบจัดส่ง/ใบปะหน้า"',
        tip: 'ใช้เมื่อลืมปริ้นในหน้าแรก หรือต้องการปริ้นใบปะหน้าซ้ำ',
        image: 'assets/slides/shippop-web/slide_09.png'
      },
      {
        stepNumber: 9,
        title: '(กรณีต้องการพิมพ์ใบปะหน้าใหม่) กดปุ่ม "พิมพ์ใบปะหน้า" ในตาราง',
        description: 'เลือกวันที่ที่ทำรายการ แล้วกดปุ่มกรอบสีขาว "พิมพ์ใบปะหน้า" ท้ายรายการที่ต้องการได้เลย',
        tip: 'เสร็จสิ้นขั้นตอนการพิมพ์ใบปะหน้าย้อนหลังใน Shippop',
        image: 'assets/slides/shippop-web/slide_10.png'
      }
    ]
  }
];

// ============================================================================
// Application State
// ============================================================================
const state = {
  activeCategoryId: null, // null = หน้าแรก, string = หน้าดูขั้นตอนพอดีจอ
  activeSlideIndex: 0,    // เริ่มที่ภาพที่ 1 เสมอ (index 0)
  lightboxOpen: false,
  toastTimer: null,
  preloadedCategories: {}
};

// ============================================================================
// SVG Icons
// ============================================================================
const ICONS = {
  sun: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  arrowLeft: `<svg class="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowRight: `<svg class="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  check: `<svg class="w-6 h-6 sm:w-7 sm:h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

function getNumberBoxStyle(color) {
  switch (color) {
    case 'emerald':
      return 'bg-emerald-600 text-white';
    case 'amber':
      return 'bg-amber-500 text-white';
    case 'rose':
      return 'bg-rose-600 text-white';
    default:
      return 'bg-indigo-600 text-white';
  }
}

// ============================================================================
// Preload Images for Instant Zero-Lag Transitions
// ============================================================================
function preloadCategoryImages(category) {
  if (!category || state.preloadedCategories[category.id]) return;
  state.preloadedCategories[category.id] = true;
  category.steps.forEach((s) => {
    const img = new Image();
    img.src = s.image;
  });
}

// ============================================================================
// Theme Toggle
// ============================================================================
function updateThemeUI() {
  const isDark = document.documentElement.classList.contains('dark');
  const metaTheme = document.getElementById('meta-theme-color');
  if (metaTheme) {
    metaTheme.setAttribute('content', isDark ? '#030712' : '#f8fafc');
  }
  const iconBox = document.getElementById('theme-icon-box');
  const labelText = document.getElementById('theme-label-text');
  if (iconBox) iconBox.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  if (labelText) labelText.textContent = isDark ? 'พื้นหลังสว่าง' : 'พื้นหลังมืด';
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  try {
    localStorage.setItem('zwiz_manual_theme', isDark ? 'dark' : 'light');
  } catch (e) {}
  updateThemeUI();
}

// ============================================================================
// Toast Notification & Copy
// ============================================================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  const msgEl = document.getElementById('toast-message');
  if (!container || !msgEl) return;

  if (state.toastTimer) clearTimeout(state.toastTimer);
  msgEl.textContent = message;
  container.classList.remove('hidden');

  state.toastTimer = setTimeout(() => {
    container.classList.add('hidden');
  }, 3000);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`คัดลอกคำว่า "${text}" เรียบร้อยแล้ว`);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(`คัดลอกคำว่า "${text}" เรียบร้อยแล้ว`);
  }
}

// ============================================================================
// Navigation Logic
// ============================================================================
function openHomeList(pushHash = true) {
  state.activeCategoryId = null;
  state.activeSlideIndex = 0;
  if (pushHash && window.location.hash) {
    history.pushState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderApp();
}

function openTopicAtFirstStep(categoryId, pushHash = true) {
  const cat = MANUAL_CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return;

  preloadCategoryImages(cat);
  state.activeCategoryId = cat.id;
  state.activeSlideIndex = 0; // เปิดไปที่ ภาพที่ 1 เสมอ
  if (pushHash) {
    history.pushState({ categoryId: cat.id }, '', `#${cat.id}`);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderApp('next');
}

function goToStep(newIndex) {
  const cat = MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId);
  if (!cat) return;
  if (newIndex < 0 || newIndex >= cat.steps.length || newIndex === state.activeSlideIndex) return;

  const direction = newIndex > state.activeSlideIndex ? 'next' : 'prev';
  state.activeSlideIndex = newIndex;
  updateStepViewerInPlace(cat, direction);
}

// ============================================================================
// Rendering
// ============================================================================
function renderApp(direction = 'next') {
  const homeView = document.getElementById('home-view');
  const stepViewer = document.getElementById('step-viewer');
  const headerBackBtn = document.getElementById('btn-header-back-home');
  const headerMainTitle = document.getElementById('header-main-title');
  const headerSubTitle = document.getElementById('header-sub-title');

  if (!homeView || !stepViewer) return;

  if (state.activeCategoryId === null) {
    // ปลดล็อกความสูงหน้าจอเพื่อให้หน้าแรกเลื่อนดูหัวข้อได้ตามปกติ
    document.body.classList.remove('h-dvh', 'overflow-hidden');
    headerBackBtn?.classList.add('hidden');
    if (headerMainTitle) headerMainTitle.textContent = 'คู่มือพนักงานขาย (ร้านมรุกข)';
    if (headerSubTitle) headerSubTitle.textContent = 'ระบบส่งพัสดุ Zwiz & Shippop';

    stepViewer.classList.add('hidden');
    homeView.classList.remove('hidden');
    renderHomeView(homeView);
  } else {
    // ล็อกความสูงหน้าจอเป็น 100dvh พอดีเป๊ะ เพื่อให้เห็นปุ่ม ก่อนหน้า/ถัดไป และ 1..11 ทันทีโดยไม่ต้องเลื่อนจอ!
    document.body.classList.add('h-dvh', 'overflow-hidden');
    headerBackBtn?.classList.remove('hidden');

    const cat = MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId);
    if (cat) {
      preloadCategoryImages(cat);
      if (headerMainTitle) headerMainTitle.textContent = `${cat.number}. ${cat.title}`;
      if (headerSubTitle) headerSubTitle.textContent = 'กดปุ่ม ถัดไป หรือกดตัวเลขด้านล่างเพื่อเปลี่ยนภาพ';
    }

    homeView.classList.add('hidden');
    stepViewer.classList.remove('hidden');
    updateStepViewerInPlace(cat, direction);
  }
}

/**
 * 1. หน้าแรก: รายการหัวข้อคู่มือ ขนาดใหญ่ ตัวหนังสือหนา
 */
function renderHomeView(container) {
  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
        กดเลือกหัวข้อคู่มือที่ต้องการดู
      </h2>
      <p class="text-base sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
        กดเลือกหัวข้อด้านล่างเพื่อเปิดดู <span class="text-indigo-600 dark:text-indigo-400 underline">ภาพขั้นตอนที่ 1</span> ทันที
      </p>
    </div>

    <div class="space-y-3.5">
      ${MANUAL_CATEGORIES.map((cat) => {
        const total = cat.steps.length;
        return `
          <button
            type="button"
            data-open-topic="${cat.id}"
            class="w-full text-left bg-white hover:bg-indigo-50/50 dark:bg-slate-900 dark:hover:bg-slate-800/90 border-2 border-slate-300 hover:border-indigo-600 dark:border-slate-700 dark:hover:border-indigo-500 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all active:scale-[0.99] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            <div class="flex items-start sm:items-center gap-4">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${getNumberBoxStyle(cat.color)} flex items-center justify-center text-2xl sm:text-3xl font-extrabold shadow-md shrink-0">
                ${cat.number}
              </div>
              <div class="space-y-1">
                <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 leading-snug">
                  ${escapeHtml(cat.title)}
                </h3>
                <p class="text-base sm:text-lg font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                  ${escapeHtml(cat.summary)}
                </p>
              </div>
            </div>

            <div class="w-full sm:w-auto shrink-0">
              <span class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-indigo-600 group-hover:bg-indigo-700 text-white text-lg sm:text-xl font-extrabold shadow-md inline-flex items-center justify-center gap-2.5 transition-colors">
                <span>เปิดดูคู่มือ (${total} ภาพ)</span>
                ${ICONS.arrowRight}
              </span>
            </div>
          </button>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('[data-open-topic]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-topic');
      openTopicAtFirstStep(id);
    });
  });
}

/**
 * 2. อัปเดตหน้าดูขั้นตอนแบบ In-Place (ไม่รีเซ็ตหน้าจอ สมูทลื่นไหล และเห็นปุ่มครบ 100% ใน 1 จอ)
 */
function updateStepViewerInPlace(cat, direction = 'next') {
  if (!cat) {
    openHomeList();
    return;
  }

  const totalSteps = cat.steps.length;
  if (state.activeSlideIndex >= totalSteps) state.activeSlideIndex = 0;

  const step = cat.steps[state.activeSlideIndex];
  const isFirst = state.activeSlideIndex === 0;
  const isLast = state.activeSlideIndex === totalSteps - 1;

  // Elements
  const badgeCounter = document.getElementById('step-badge-counter');
  const titleText = document.getElementById('step-title-text');
  const descText = document.getElementById('step-desc-text');
  const tipText = document.getElementById('step-tip-text');
  const copyBtn = document.getElementById('btn-step-copy-cmd');
  const copyLabel = document.getElementById('btn-step-copy-label');
  const mainImage = document.getElementById('step-main-image');
  const instructionBox = document.getElementById('step-instruction-box');
  const prevBtn = document.getElementById('btn-prev-step');
  const nextBtn = document.getElementById('btn-next-step');
  const pillsContainer = document.getElementById('step-number-pills');

  // 1) Update Top Instruction Banner
  if (badgeCounter) badgeCounter.textContent = `ภาพที่ ${step.stepNumber} จาก ${totalSteps}`;
  if (titleText) titleText.textContent = `ขั้นตอนที่ ${step.stepNumber} : ${step.title}`;
  if (descText) descText.textContent = step.description;

  if (tipText) {
    if (step.tip) {
      tipText.textContent = `จุดสังเกต: ${step.tip}`;
      tipText.classList.remove('hidden');
    } else {
      tipText.classList.add('hidden');
    }
  }

  if (copyBtn && copyLabel) {
    if (step.copyCommand) {
      copyLabel.textContent = `กดคัดลอก "${step.copyCommand}"`;
      copyBtn.classList.remove('hidden');
      copyBtn.classList.add('inline-flex');
      copyBtn.onclick = () => copyText(step.copyCommand);
    } else {
      copyBtn.classList.add('hidden');
      copyBtn.classList.remove('inline-flex');
    }
  }

  // 2) Update Image with Smooth Slide/Fade Animation
  if (mainImage) {
    mainImage.classList.remove('animate-step-next', 'animate-step-prev');
    void mainImage.offsetWidth; // Reflow to restart animation cleanly
    mainImage.src = step.image;
    mainImage.alt = step.title;
    mainImage.classList.add(direction === 'prev' ? 'animate-step-prev' : 'animate-step-next');
  }

  if (instructionBox) {
    instructionBox.classList.remove('animate-step-next', 'animate-step-prev');
    void instructionBox.offsetWidth;
    instructionBox.classList.add(direction === 'prev' ? 'animate-step-prev' : 'animate-step-next');
  }

  // 3) Update Giant Previous Button
  if (prevBtn) {
    prevBtn.disabled = isFirst;
    prevBtn.className = `h-14 sm:h-16 px-3 sm:px-6 rounded-2xl text-base sm:text-2xl font-extrabold border-2 transition-all active:scale-95 flex items-center justify-center gap-2 ${
      isFirst
        ? 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800 cursor-not-allowed'
        : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border-slate-400 dark:border-slate-600 shadow-sm'
    }`;
    prevBtn.innerHTML = `
      ${ICONS.arrowLeft}
      <span>ก่อนหน้า ${!isFirst ? `(ภาพที่ ${step.stepNumber - 1})` : ''}</span>
    `;
    prevBtn.onclick = () => {
      if (!isFirst) goToStep(state.activeSlideIndex - 1);
    };
  }

  // 4) Update Giant Next / Finish Button
  if (nextBtn) {
    if (!isLast) {
      nextBtn.className =
        'h-14 sm:h-16 px-3 sm:px-6 rounded-2xl text-base sm:text-2xl font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 transition-all active:scale-95 flex items-center justify-center gap-2';
      nextBtn.innerHTML = `
        <span>ถัดไป (ภาพที่ ${step.stepNumber + 1})</span>
        ${ICONS.arrowRight}
      `;
      nextBtn.onclick = () => goToStep(state.activeSlideIndex + 1);
    } else {
      nextBtn.className =
        'h-14 sm:h-16 px-3 sm:px-6 rounded-2xl text-base sm:text-2xl font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25 transition-all active:scale-95 flex items-center justify-center gap-2';
      nextBtn.innerHTML = `
        ${ICONS.check}
        <span>เสร็จสิ้น (กลับหน้าแรก)</span>
      `;
      nextBtn.onclick = () => openHomeList();
    }
  }

  // 5) Update Direct Step Number Buttons (1 2 3 ... 11)
  if (pillsContainer) {
    pillsContainer.innerHTML = cat.steps
      .map(
        (s, i) => `
      <button
        type="button"
        data-jump-index="${i}"
        class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl text-sm sm:text-lg font-extrabold border-2 transition-all active:scale-95 ${
          i === state.activeSlideIndex
            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105'
            : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-indigo-500'
        }"
      >
        ${s.stepNumber}
      </button>
    `
      )
      .join('');

    pillsContainer.querySelectorAll('[data-jump-index]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-jump-index'), 10);
        goToStep(idx);
      });
    });
  }
}

// ============================================================================
// Lightbox (Full-screen Image Zoom)
// ============================================================================
function openLightbox() {
  const cat = MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId);
  if (!cat) return;
  const step = cat.steps[state.activeSlideIndex];
  if (!step) return;

  state.lightboxOpen = true;
  const backdrop = document.getElementById('lightbox-backdrop');
  const titleEl = document.getElementById('lightbox-title');
  const imgEl = document.getElementById('lightbox-image');

  if (titleEl) titleEl.textContent = `ขั้นตอนที่ ${step.stepNumber} : ${step.title}`;
  if (imgEl) {
    imgEl.src = step.image;
    imgEl.alt = step.title;
  }
  backdrop?.classList.remove('hidden');
}

function closeLightbox() {
  state.lightboxOpen = false;
  document.getElementById('lightbox-backdrop')?.classList.add('hidden');
}

// ============================================================================
// Utilities & Initialization
// ============================================================================
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', () => {
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && MANUAL_CATEGORIES.some((c) => c.id === initialHash)) {
    state.activeCategoryId = initialHash;
    state.activeSlideIndex = 0;
  } else {
    state.activeCategoryId = null;
  }

  window.addEventListener('popstate', () => {
    const hashId = window.location.hash.replace('#', '');
    if (hashId && MANUAL_CATEGORIES.some((c) => c.id === hashId)) {
      state.activeCategoryId = hashId;
      state.activeSlideIndex = 0;
    } else {
      state.activeCategoryId = null;
    }
    renderApp();
  });

  updateThemeUI();
  renderApp();

  document.getElementById('btn-brand-home')?.addEventListener('click', () => openHomeList());
  document.getElementById('btn-header-back-home')?.addEventListener('click', () => openHomeList());
  document.getElementById('btn-theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('step-image-wrapper')?.addEventListener('click', openLightbox);

  document.getElementById('lightbox-backdrop')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-container')?.addEventListener('click', (e) => e.stopPropagation());
  document.getElementById('btn-close-lightbox')?.addEventListener('click', closeLightbox);

  // Touch Swipe Left / Right on Image for Mobile Smoothness
  let touchStartX = 0;
  const imgWrapper = document.getElementById('step-image-wrapper');
  imgWrapper?.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  imgWrapper?.addEventListener(
    'touchend',
    (e) => {
      const diffX = e.changedTouches[0].screenX - touchStartX;
      const cat = MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId);
      if (!cat) return;
      if (diffX < -50 && state.activeSlideIndex < cat.steps.length - 1) {
        goToStep(state.activeSlideIndex + 1);
      } else if (diffX > 50 && state.activeSlideIndex > 0) {
        goToStep(state.activeSlideIndex - 1);
      }
    },
    { passive: true }
  );

  // Keyboard support
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.lightboxOpen) {
        closeLightbox();
      } else if (state.activeCategoryId !== null) {
        openHomeList();
      }
      return;
    }

    if (state.activeCategoryId !== null && !state.lightboxOpen) {
      const cat = MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId);
      if (!cat) return;
      if (e.key === 'ArrowLeft' && state.activeSlideIndex > 0) {
        goToStep(state.activeSlideIndex - 1);
      } else if (e.key === 'ArrowRight' && state.activeSlideIndex < cat.steps.length - 1) {
        goToStep(state.activeSlideIndex + 1);
      }
    }
  });
});
