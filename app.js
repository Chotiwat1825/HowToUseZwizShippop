/**
 * คู่มือแนวทางการใช้งาน Zwiz & Shippop สำหรับพนักงานขาย (ร้านมรุกข)
 * - ปุ่ม "ก่อนหน้า" และ "ถัดไป" ขนาดใหญ่อยู่ด้านซ้าย-ขวาของภาพ กดง่ายไม่ต้องเลื่อนจอ
 * - รองรับการใช้ลูกกลิ้งเมาส์ซูมเข้า-ออก (Mouse Wheel Zoom) + คลิกลากเลื่อนดูภาพ (Drag Pan) + ดับเบิลคลิกซูม
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
// Application & Zoom / Touch State
// ============================================================================
const state = {
  activeCategoryId: null,
  activeSlideIndex: 0,
  toastTimer: null,
  preloadedCategories: {}
};

const zoomState = {
  scale: 1,
  panX: 0,
  panY: 0,
  isDragging: false,
  startX: 0,
  startY: 0,
  // Touch state
  isPinching: false,
  initialPinchDistance: 0,
  initialPinchScale: 1,
  pinchCenterX: 0,
  pinchCenterY: 0,
  lastTapTime: 0,
  swipeStartX: 0,
  swipeStartY: 0,
  isSwiping: false
};

// ============================================================================
// SVG Icons
// ============================================================================
const ICONS = {
  sun: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg class="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  arrowLeftBig: `<svg class="w-7 h-7 xl:w-10 xl:h-10 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowRightBig: `<svg class="w-7 h-7 xl:w-10 xl:h-10 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  checkBig: `<svg class="w-7 h-7 xl:w-10 xl:h-10 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowLeftSm: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowRightSm: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  checkSm: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
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
// Interactive Mouse Wheel Zoom, Touch Pinch-Zoom & Drag-Pan Engine
// ============================================================================
function updateZoomPresetButtons() {
  const btn1x = document.getElementById('btn-zoom-1x');
  const btn2x = document.getElementById('btn-zoom-2x');
  const btn3x = document.getElementById('btn-zoom-3x');
  const panHint = document.getElementById('zoom-pan-hint');

  const s = zoomState.scale;
  const activeCls = 'px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs sm:text-sm font-extrabold active:scale-95 transition shadow';
  const inactiveCls = 'px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-extrabold active:scale-95 transition';

  if (btn1x) btn1x.className = s < 1.5 ? activeCls : inactiveCls;
  if (btn2x) btn2x.className = s >= 1.5 && s < 2.6 ? activeCls : inactiveCls;
  if (btn3x) btn3x.className = s >= 2.6 ? activeCls : inactiveCls;

  if (panHint) {
    if (s > 1.05) {
      panHint.classList.remove('hidden');
    } else {
      panHint.classList.add('hidden');
    }
  }
}

function clampPanToBounds() {
  const viewport = document.getElementById('step-image-viewport');
  if (!viewport || zoomState.scale <= 1) {
    zoomState.panX = 0;
    zoomState.panY = 0;
    return;
  }
  const rect = viewport.getBoundingClientRect();
  const maxPanX = ((zoomState.scale - 1) * rect.width) / 1.85;
  const maxPanY = ((zoomState.scale - 1) * rect.height) / 1.85;
  zoomState.panX = Math.max(-maxPanX, Math.min(maxPanX, zoomState.panX));
  zoomState.panY = Math.max(-maxPanY, Math.min(maxPanY, zoomState.panY));
}

function applyZoomTransform(animate = true) {
  const zoomLayer = document.getElementById('step-zoom-layer');
  const viewport = document.getElementById('step-image-viewport');
  if (!zoomLayer || !viewport) return;

  clampPanToBounds();

  if (animate) {
    zoomLayer.classList.add('transition-transform', 'duration-100');
  } else {
    zoomLayer.classList.remove('transition-transform', 'duration-100');
  }

  zoomLayer.style.transform = `translate3d(${zoomState.panX}px, ${zoomState.panY}px, 0) scale(${zoomState.scale})`;

  updateZoomPresetButtons();

  if (zoomState.scale > 1) {
    viewport.classList.remove('cursor-zoom-in');
    viewport.classList.add(zoomState.isDragging ? 'cursor-grabbing' : 'cursor-grab');
  } else {
    viewport.classList.remove('cursor-grab', 'cursor-grabbing');
    viewport.classList.add('cursor-zoom-in');
  }
}

function resetZoom(animate = true) {
  zoomState.scale = 1;
  zoomState.panX = 0;
  zoomState.panY = 0;
  zoomState.isDragging = false;
  zoomState.isPinching = false;
  applyZoomTransform(animate);
}

function setZoomScale(targetScale, clientX = null, clientY = null, animate = true) {
  const viewport = document.getElementById('step-image-viewport');
  const prevScale = zoomState.scale;
  const nextScale = Math.min(4.5, Math.max(1, +targetScale.toFixed(2)));

  if (nextScale === 1) {
    resetZoom(animate);
    return;
  }

  if (viewport && clientX !== null && clientY !== null) {
    const rect = viewport.getBoundingClientRect();
    const offsetX = clientX - (rect.left + rect.width / 2);
    const offsetY = clientY - (rect.top + rect.height / 2);
    const ratio = nextScale / prevScale;
    zoomState.panX = offsetX - (offsetX - zoomState.panX) * ratio;
    zoomState.panY = offsetY - (offsetY - zoomState.panY) * ratio;
  }

  zoomState.scale = nextScale;
  applyZoomTransform(animate);
}

function zoomByStep(delta, clientX = null, clientY = null) {
  setZoomScale(zoomState.scale + delta, clientX, clientY, true);
}

function getTouchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function setupMouseAndTouchZoom() {
  const viewport = document.getElementById('step-image-viewport');
  if (!viewport) return;

  // 1) Mouse Wheel Zoom In / Out
  viewport.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.3 : -0.3;
      zoomByStep(delta, e.clientX, e.clientY);
    },
    { passive: false }
  );

  // 2) Double Click on Desktop to Toggle Zoom 2.2x / 1.0x
  viewport.addEventListener('dblclick', (e) => {
    if (e.target.closest('button')) return;
    if (zoomState.scale > 1.05) {
      resetZoom(true);
    } else {
      setZoomScale(2.2, e.clientX, e.clientY, true);
    }
  });

  // 3) Mouse Drag to Pan when zoomed in
  viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0 || e.target.closest('button')) return;
    if (zoomState.scale <= 1) return;

    zoomState.isDragging = true;
    zoomState.startX = e.clientX - zoomState.panX;
    zoomState.startY = e.clientY - zoomState.panY;
    applyZoomTransform(false);
  });

  window.addEventListener('mousemove', (e) => {
    if (!zoomState.isDragging) return;
    zoomState.panX = e.clientX - zoomState.startX;
    zoomState.panY = e.clientY - zoomState.startY;
    applyZoomTransform(false);
  });

  window.addEventListener('mouseup', () => {
    if (!zoomState.isDragging) return;
    zoomState.isDragging = false;
    applyZoomTransform(true);
  });

  // 4) Tablet & Smartphone Touch Support (2-Finger Pinch Zoom, 1-Finger Pan, Double-Tap Zoom, 1-Finger Swipe Step)
  viewport.addEventListener(
    'touchstart',
    (e) => {
      if (e.target.closest('button')) return;

      if (e.touches.length === 2) {
        // Start 2-finger pinch zoom
        e.preventDefault();
        zoomState.isPinching = true;
        zoomState.isDragging = false;
        zoomState.isSwiping = false;
        zoomState.initialPinchDistance = getTouchDistance(e.touches);
        zoomState.initialPinchScale = zoomState.scale;
        zoomState.pinchCenterX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        zoomState.pinchCenterY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      } else if (e.touches.length === 1) {
        const touch = e.touches[0];
        const now = Date.now();

        // Check Double-Tap to Zoom (within 300ms)
        if (now - zoomState.lastTapTime < 300) {
          e.preventDefault();
          zoomState.lastTapTime = 0;
          if (zoomState.scale > 1.05) {
            resetZoom(true);
          } else {
            setZoomScale(2.3, touch.clientX, touch.clientY, true);
          }
          return;
        }
        zoomState.lastTapTime = now;

        if (zoomState.scale > 1.02) {
          // 1-Finger Pan when zoomed in
          zoomState.isDragging = true;
          zoomState.isSwiping = false;
          zoomState.startX = touch.clientX - zoomState.panX;
          zoomState.startY = touch.clientY - zoomState.panY;
        } else {
          // 1-Finger Swipe to change step when at 1x scale
          zoomState.isSwiping = true;
          zoomState.swipeStartX = touch.clientX;
          zoomState.swipeStartY = touch.clientY;
        }
      }
    },
    { passive: false }
  );

  viewport.addEventListener(
    'touchmove',
    (e) => {
      if (zoomState.isPinching && e.touches.length === 2) {
        e.preventDefault();
        const currentDist = getTouchDistance(e.touches);
        if (zoomState.initialPinchDistance > 0) {
          const newScale = zoomState.initialPinchScale * (currentDist / zoomState.initialPinchDistance);
          setZoomScale(newScale, zoomState.pinchCenterX, zoomState.pinchCenterY, false);
        }
      } else if (zoomState.isDragging && e.touches.length === 1 && zoomState.scale > 1.02) {
        e.preventDefault();
        const touch = e.touches[0];
        zoomState.panX = touch.clientX - zoomState.startX;
        zoomState.panY = touch.clientY - zoomState.startY;
        applyZoomTransform(false);
      }
    },
    { passive: false }
  );

  viewport.addEventListener('touchend', (e) => {
    if (zoomState.isPinching && e.touches.length < 2) {
      zoomState.isPinching = false;
      if (zoomState.scale < 1.05) {
        resetZoom(true);
      } else {
        applyZoomTransform(true);
      }
    }

    if (zoomState.isDragging && e.touches.length === 0) {
      zoomState.isDragging = false;
      applyZoomTransform(true);
    }

    // Handle 1-finger horizontal swipe when not zoomed in
    if (zoomState.isSwiping && e.changedTouches.length === 1 && zoomState.scale <= 1.02) {
      zoomState.isSwiping = false;
      const dx = e.changedTouches[0].clientX - zoomState.swipeStartX;
      const dy = e.changedTouches[0].clientY - zoomState.swipeStartY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        const cat = MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId);
        if (!cat) return;
        if (dx < 0 && state.activeSlideIndex < cat.steps.length - 1) {
          goToStep(state.activeSlideIndex + 1);
        } else if (dx > 0 && state.activeSlideIndex > 0) {
          goToStep(state.activeSlideIndex - 1);
        }
      }
    }
  });

  // 5) Floating Quick Zoom Preset Buttons (1x, 2x, 3x, +, -)
  document.getElementById('btn-zoom-1x')?.addEventListener('click', (e) => {
    e.stopPropagation();
    resetZoom(true);
  });
  document.getElementById('btn-zoom-2x')?.addEventListener('click', (e) => {
    e.stopPropagation();
    zoomState.panX = 0;
    zoomState.panY = 0;
    setZoomScale(2.2, null, null, true);
  });
  document.getElementById('btn-zoom-3x')?.addEventListener('click', (e) => {
    e.stopPropagation();
    zoomState.panX = 0;
    zoomState.panY = 0;
    setZoomScale(3.2, null, null, true);
  });
  document.getElementById('btn-zoom-in')?.addEventListener('click', (e) => {
    e.stopPropagation();
    zoomByStep(0.4);
  });
  document.getElementById('btn-zoom-out')?.addEventListener('click', (e) => {
    e.stopPropagation();
    zoomByStep(-0.4);
  });
}

// ============================================================================
// Preload Images
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
  document.querySelectorAll('.theme-icon-box').forEach((el) => {
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  });
  document.querySelectorAll('.theme-label-text').forEach((el) => {
    el.textContent = isDark ? 'พื้นหลังสว่าง' : 'พื้นหลังมืด';
  });
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
  resetZoom(false);
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
  state.activeSlideIndex = 0;
  resetZoom(false);
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
  resetZoom(false);
  updateStepViewerInPlace(cat, direction);
}

// ============================================================================
// Rendering
// ============================================================================
function renderApp(direction = 'next') {
  const mainHeader = document.getElementById('main-site-header');
  const homeView = document.getElementById('home-view');
  const stepViewer = document.getElementById('step-viewer');
  const prevBtnDesktop = document.getElementById('btn-prev-step-desktop');
  const nextBtnDesktop = document.getElementById('btn-next-step-desktop');

  if (!homeView || !stepViewer) return;

  if (state.activeCategoryId === null) {
    document.body.classList.remove('h-dvh', 'overflow-hidden');
    mainHeader?.classList.remove('hidden');
    prevBtnDesktop?.classList.add('hidden');
    prevBtnDesktop?.classList.remove('lg:flex');
    nextBtnDesktop?.classList.add('hidden');
    nextBtnDesktop?.classList.remove('lg:flex');

    stepViewer.classList.add('hidden');
    homeView.classList.remove('hidden');
    renderHomeView(homeView);
  } else {
    // Fullscreen image-first mode: hide main site header so 100% of vertical space goes to Step Viewer
    document.body.classList.add('h-dvh', 'overflow-hidden');
    mainHeader?.classList.add('hidden');
    prevBtnDesktop?.classList.remove('hidden');
    prevBtnDesktop?.classList.add('hidden', 'lg:flex');
    nextBtnDesktop?.classList.remove('hidden');
    nextBtnDesktop?.classList.add('hidden', 'lg:flex');

    const cat = MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId);
    if (cat) {
      preloadCategoryImages(cat);
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
                <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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
 * 2. อัปเดตหน้าดูขั้นตอนแบบ In-Place เน้นภาพใหญ่เต็มจอทั้งบนคอม มือถือ และแท็บเล็ต
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
  const prevBtnDesktop = document.getElementById('btn-prev-step-desktop');
  const nextBtnDesktop = document.getElementById('btn-next-step-desktop');
  const prevBtnMobile = document.getElementById('btn-prev-step-mobile');
  const nextBtnMobile = document.getElementById('btn-next-step-mobile');
  const pillsContainer = document.getElementById('step-number-pills');

  // 1) Update Compact Top Instruction Bar
  if (badgeCounter) badgeCounter.textContent = `ภาพที่ ${step.stepNumber} / ${totalSteps}`;
  if (titleText) titleText.textContent = `${step.title}`;
  if (descText) descText.textContent = step.description;

  if (tipText) {
    if (step.tip) {
      tipText.textContent = `💡 ${step.tip}`;
      tipText.classList.remove('hidden');
    } else {
      tipText.classList.add('hidden');
    }
  }

  if (copyBtn && copyLabel) {
    if (step.copyCommand) {
      copyLabel.textContent = `คัดลอก "${step.copyCommand}"`;
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
    void mainImage.offsetWidth;
    mainImage.src = step.image;
    mainImage.alt = step.title;
    mainImage.classList.add(direction === 'prev' ? 'animate-step-prev' : 'animate-step-next');
  }

  if (instructionBox) {
    instructionBox.classList.remove('animate-step-next', 'animate-step-prev');
    void instructionBox.offsetWidth;
    instructionBox.classList.add(direction === 'prev' ? 'animate-step-prev' : 'animate-step-next');
  }

  // 3) DESKTOP SIDE BUTTONS (Outside #step-viewer on lg+ screens)
  if (prevBtnDesktop) {
    prevBtnDesktop.disabled = isFirst;
    prevBtnDesktop.className = `hidden lg:flex fixed left-2 top-1/2 -translate-y-1/2 z-40 w-20 xl:w-28 min-h-[140px] xl:min-h-[165px] rounded-2xl border-2 transition-all active:scale-95 flex-col items-center justify-center gap-1.5 p-2 text-center select-none ${
      isFirst
        ? 'bg-slate-800/40 text-slate-600 border-slate-800 cursor-not-allowed'
        : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border-slate-400 dark:border-slate-600 shadow-xl cursor-pointer'
    }`;
    prevBtnDesktop.innerHTML = `
      ${ICONS.arrowLeftBig}
      <span class="text-base xl:text-xl font-extrabold leading-tight">ก่อนหน้า</span>
      <span class="text-xs xl:text-sm font-bold opacity-80">${!isFirst ? `(ภาพที่ ${step.stepNumber - 1})` : '(ภาพแรก)'}</span>
    `;
    prevBtnDesktop.onclick = () => {
      if (!isFirst) goToStep(state.activeSlideIndex - 1);
    };
  }

  if (nextBtnDesktop) {
    if (!isLast) {
      nextBtnDesktop.className =
        'hidden lg:flex fixed right-2 top-1/2 -translate-y-1/2 z-40 w-20 xl:w-28 min-h-[140px] xl:min-h-[165px] rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl shadow-indigo-500/30 transition-all active:scale-95 flex-col items-center justify-center gap-1.5 p-2 text-center select-none cursor-pointer';
      nextBtnDesktop.innerHTML = `
        ${ICONS.arrowRightBig}
        <span class="text-base xl:text-xl font-extrabold leading-tight">ถัดไป</span>
        <span class="text-xs xl:text-sm font-bold text-indigo-100">(ภาพที่ ${step.stepNumber + 1})</span>
      `;
      nextBtnDesktop.onclick = () => goToStep(state.activeSlideIndex + 1);
    } else {
      nextBtnDesktop.className =
        'hidden lg:flex fixed right-2 top-1/2 -translate-y-1/2 z-40 w-20 xl:w-28 min-h-[140px] xl:min-h-[165px] rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl shadow-emerald-500/30 transition-all active:scale-95 flex-col items-center justify-center gap-1.5 p-2 text-center select-none cursor-pointer';
      nextBtnDesktop.innerHTML = `
        ${ICONS.checkBig}
        <span class="text-base xl:text-xl font-extrabold leading-tight">เสร็จสิ้น</span>
        <span class="text-xs xl:text-sm font-bold text-emerald-100">(กลับหน้าแรก)</span>
      `;
      nextBtnDesktop.onclick = () => openHomeList();
    }
  }

  // 4) MOBILE / TABLET BOTTOM BUTTONS (< 1024px so image uses 100% screen width!)
  if (prevBtnMobile) {
    prevBtnMobile.disabled = isFirst;
    prevBtnMobile.className = `lg:hidden h-11 sm:h-12 px-3 sm:px-5 rounded-xl text-sm sm:text-lg font-extrabold border-2 transition active:scale-95 flex items-center justify-center gap-1.5 shrink-0 ${
      isFirst
        ? 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800 cursor-not-allowed'
        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-400 dark:border-slate-600 shadow-sm'
    }`;
    prevBtnMobile.innerHTML = `
      ${ICONS.arrowLeftSm}
      <span>ก่อนหน้า</span>
    `;
    prevBtnMobile.onclick = () => {
      if (!isFirst) goToStep(state.activeSlideIndex - 1);
    };
  }

  if (nextBtnMobile) {
    if (!isLast) {
      nextBtnMobile.className =
        'lg:hidden h-11 sm:h-12 px-3.5 sm:px-5 rounded-xl text-sm sm:text-lg font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition active:scale-95 flex items-center justify-center gap-1.5 shrink-0';
      nextBtnMobile.innerHTML = `
        <span>ถัดไป (${step.stepNumber + 1})</span>
        ${ICONS.arrowRightSm}
      `;
      nextBtnMobile.onclick = () => goToStep(state.activeSlideIndex + 1);
    } else {
      nextBtnMobile.className =
        'lg:hidden h-11 sm:h-12 px-3.5 sm:px-5 rounded-xl text-sm sm:text-lg font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition active:scale-95 flex items-center justify-center gap-1.5 shrink-0';
      nextBtnMobile.innerHTML = `
        ${ICONS.checkSm}
        <span>เสร็จสิ้น</span>
      `;
      nextBtnMobile.onclick = () => openHomeList();
    }
  }

  // 5) Bottom Number Pills (1 2 3 ... 11) with Auto-Scroll to Active Pill
  if (pillsContainer) {
    pillsContainer.innerHTML = cat.steps
      .map(
        (s, i) => `
      <button
        type="button"
        data-jump-index="${i}"
        class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-sm sm:text-base font-extrabold border-2 transition-all active:scale-95 shrink-0 ${
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

    const activePill = pillsContainer.querySelector(`[data-jump-index="${state.activeSlideIndex}"]`);
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
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
    resetZoom(false);
    renderApp();
  });

  updateThemeUI();
  setupMouseAndTouchZoom();
  renderApp();

  document.getElementById('btn-brand-home')?.addEventListener('click', () => openHomeList());
  document.getElementById('btn-header-back-home')?.addEventListener('click', () => openHomeList());
  document.getElementById('btn-theme-toggle-home')?.addEventListener('click', toggleTheme);
  document.getElementById('btn-theme-toggle-viewer')?.addEventListener('click', toggleTheme);

  // Keyboard support
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (zoomState.scale > 1) {
        resetZoom(true);
      } else if (state.activeCategoryId !== null) {
        openHomeList();
      }
      return;
    }

    if (state.activeCategoryId !== null) {
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
