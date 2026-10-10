/**
 * คู่มือแนวทางการใช้งาน Zwiz & Shippop สำหรับพนักงานขาย (ร้านมรุกข)
 * Adheres strictly to Premium UX/UI & Micro-interactions Guidelines
 */

const MANUAL_CATEGORIES = [
  {
    id: 'zwiz-ship',
    number: '01',
    title: 'การส่งพัสดุผ่านระบบ Zwiz',
    shortTitle: 'ส่งพัสดุ Zwiz',
    badgeText: '11 ขั้นตอนหลัก',
    badgeColor: 'indigo',
    summary: 'ตั้งแต่เข้าหน้ารวมแชท เลือกแชทลูกค้า คัดลอกและวางที่อยู่จัดส่ง ตรวจสอบความถูกต้อง เลือกขนส่งผ่านระบบ Shippop จนถึงการปริ้นใบปะหน้าพัสดุ',
    keyRule: 'ตรวจสอบชื่อ ที่อยู่ และขนส่งให้ครบ 3 จุดก่อนกดยืนยันส่งพัสดุทุกครั้ง',
    iconSvg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    steps: [
      {
        id: 'zwiz-ship-1',
        stepNumber: 1,
        title: 'เข้าหน้ารวมแชท',
        description: 'คลิกที่เมนู "รวมแชท" แถบสีชมพูด้านซ้ายมือ เพื่อเข้าสู่หน้าจัดการข้อความลูกค้าทั้งหมด',
        tip: 'สังเกตเมนูด้านซ้ายมือ เลือกหัวข้อ "รวมแชท" (ไอคอนข้อความคู่)',
        badge: 'เริ่มต้น',
        badgeType: 'indigo',
        image: 'assets/slides/zwiz-ship/slide_01.png'
      },
      {
        id: 'zwiz-ship-2',
        stepNumber: 2,
        title: 'เลือกแชทลูกค้าที่ต้องการจัดส่ง',
        description: 'คลิกเลือกรายชื่อแชทของลูกค้าที่แจ้งโอนเงินหรือต้องการจัดส่งสินค้าจากรายการตรงกลาง',
        tip: 'สามารถค้นหาชื่อลูกค้าหรือกรองจากป้ายกำกับสถานะได้',
        badge: 'เลือกแชท',
        badgeType: 'indigo',
        image: 'assets/slides/zwiz-ship/slide_02.png'
      },
      {
        id: 'zwiz-ship-3',
        stepNumber: 3,
        title: 'ไปที่แท็บ "สรุปออเดอร์"',
        description: 'ในแผงด้านขวามือของห้องแชท ให้คลิกที่แท็บ "สรุปออเดอร์" เพื่อดูรายการคำสั่งซื้อของลูกค้ารายนั้น',
        tip: 'แท็บสรุปออเดอร์จะอยู่ด้านบนขวา ถัดจากแท็บข้อมูลและการติดตามลูกค้า',
        badge: 'สรุปออเดอร์',
        badgeType: 'indigo',
        image: 'assets/slides/zwiz-ship/slide_03.png'
      },
      {
        id: 'zwiz-ship-4',
        stepNumber: 4,
        title: 'คัดลอกที่อยู่ลูกค้า & กดปุ่มดินสอ',
        description: '1) กดคัดลอก (ก็อป) ที่อยู่ลูกค้าจากในบทสนทนาแชท  2) กดปุ่มไอคอน "ดินสอ" ในส่วนข้อมูลจัดส่งทางด้านขวาเพื่อเข้าไปเพิ่มที่อยู่',
        tip: 'คัดลอกชื่อ เบอร์โทร และที่อยู่จากข้อความที่ลูกค้าพิมพ์ส่งมาให้ครบถ้วน',
        badge: 'กรอกที่อยู่',
        badgeType: 'amber',
        image: 'assets/slides/zwiz-ship/slide_04.png'
      },
      {
        id: 'zwiz-ship-5',
        stepNumber: 5,
        title: 'กดวางที่อยู่ ตรวจสอบ และกดบันทึก',
        description: '1) กดปุ่มสีเขียว "วางที่อยู่" เพื่อให้ระบบแยกชื่อ-เบอร์-ที่อยู่อัตโนมัติ  2) เช็คความถูกต้องของที่อยู่และรหัสไปรษณีย์  3) เลื่อนลงมากดปุ่ม "บันทึก"',
        tip: 'เช็คเบอร์โทรศัพท์และรหัสไปรษณีย์ทุกครั้งก่อนกดบันทึก',
        badge: 'สำคัญ',
        badgeType: 'emerald',
        image: 'assets/slides/zwiz-ship/slide_05.png'
      },
      {
        id: 'zwiz-ship-6',
        stepNumber: 6,
        title: 'กดปุ่มไปหน้า "สรุปออเดอร์" เพื่อเตรียมส่งพัสดุ',
        description: 'หลังจากบันทึกที่อยู่เรียบร้อยแล้ว ให้กดปุ่มสีเขียว "สรุปออเดอร์" มุมขวาบนของการ์ดคำสั่งซื้อ เพื่อเข้าสู่หน้าจัดการส่งพัสดุ',
        tip: 'ปุ่มสรุปออเดอร์จะอยู่ข้างหมายเลขสั่งซื้อ (Order No.)',
        badge: 'ไปหน้าจัดส่ง',
        badgeType: 'indigo',
        image: 'assets/slides/zwiz-ship/slide_06.png'
      },
      {
        id: 'zwiz-ship-7',
        stepNumber: 7,
        title: 'เช็คชื่อลูกค้า ที่อยู่ และเลือกขนส่ง',
        description: 'ในหน้ารายการสรุปออเดอร์ ให้ตรวจสอบ 1) ชื่อลูกค้า  2) ที่อยู่จัดส่ง และ 3) คลิกปุ่มเลือกขนส่งที่ต้องการ (เช่น BEST Express หรือ EMS)',
        tip: 'หากที่อยู่ผิด สามารถกดไอคอนดินสอสีชมพูเพื่อแก้ไขได้ทันที',
        badge: 'ตรวจสอบข้อมูล',
        badgeType: 'amber',
        image: 'assets/slides/zwiz-ship/slide_07.png'
      },
      {
        id: 'zwiz-ship-8',
        stepNumber: 8,
        title: 'ติ๊กเลือกออเดอร์ แล้วกด "ส่งกับ SHIPPOP"',
        description: '1) ติ๊กถูกหน้าหมายเลข Order No. ที่ต้องการจะส่ง  2) กดปุ่มสีฟ้า "ส่งกับ SHIPPOP" ด้านบนตาราง',
        tip: 'สามารถติ๊กเลือกหลายออเดอร์พร้อมกันเพื่อส่งในรอบเดียวได้',
        badge: 'ส่งกับ Shippop',
        badgeType: 'indigo',
        image: 'assets/slides/zwiz-ship/slide_08.png'
      },
      {
        id: 'zwiz-ship-9',
        stepNumber: 9,
        title: 'ตรวจสอบที่อยู่ผู้ส่ง แล้วกด "ถัดไป"',
        description: 'ระบบจะแสดงหน้าต่างยืนยันข้อมูลผู้ส่ง (ร้านมรุกข) และรายการออเดอร์ที่เลือก ให้ตรวจสอบแล้วกดปุ่ม "ถัดไป"',
        tip: 'ตรวจสอบว่าติ๊กถูกหน้ารายการออเดอร์ที่ต้องการส่งครบถ้วน',
        badge: 'ดำเนินการต่อ',
        badgeType: 'indigo',
        image: 'assets/slides/zwiz-ship/slide_09.png'
      },
      {
        id: 'zwiz-ship-10',
        stepNumber: 10,
        title: 'เช็ครอบสุดท้ายเพื่อความถูกต้อง (3 จุด)',
        description: 'ตรวจสอบรอบสุดท้ายก่อนตัดเงินค่าขนส่ง: 1) ที่อยู่ผู้รับปลายทาง  2) ขนส่งและราคาค่าส่ง  3) กดปุ่มสีชมพู "ถัดไป" เพื่อยืนยัน',
        tip: 'ขั้นตอนนี้สำคัญมาก เพราะเมื่อกดถัดไปแล้วระบบจะออกเลขพัสดุทันที',
        badge: 'เช็ครอบสุดท้าย',
        badgeType: 'rose',
        image: 'assets/slides/zwiz-ship/slide_10.png'
      },
      {
        id: 'zwiz-ship-11',
        stepNumber: 11,
        title: 'ปริ้นใบปะหน้าพัสดุ',
        description: 'เมื่อระบบออกเลขพัสดุสำเร็จ ให้เลือกขนาดกระดาษที่ต้องการแล้วกดปุ่มสีชมพู "ปริ้นใบปะหน้าพัสดุ" เพื่อนำไปติดกล่องสินค้า',
        tip: 'เสร็จสิ้นขั้นตอนการส่งพัสดุใน Zwiz',
        badge: 'เสร็จสมบูรณ์',
        badgeType: 'emerald',
        image: 'assets/slides/zwiz-ship/slide_11.png'
      }
    ]
  },
  {
    id: 'check-status',
    number: '02',
    title: 'วิธีดูสถานะการจัดส่งสินค้า',
    shortTitle: 'ดูสถานะจัดส่ง',
    badgeText: '3 ขั้นตอน',
    badgeColor: 'emerald',
    summary: 'วิธีตรวจสอบว่าสินค้าอยู่ในขั้นตอนไหน มีออเดอร์ไหนที่จ่ายเงินแล้วแต่ยังไม่ได้จัดส่ง หรือจัดส่งเรียบร้อยแล้ว',
    keyRule: 'สามารถกรองดูแยกตามสถานะ (จ่ายแล้ว / ส่งแล้ว / ยกเลิก) และเลือกดูย้อนหลังตามจำนวนวันได้',
    iconSvg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    steps: [
      {
        id: 'check-status-1',
        stepNumber: 1,
        title: 'เข้าเมนู "ร้านค้า/เซลเพจ" > "สรุปออเดอร์"',
        description: '1) คลิกที่เมนู "ร้านค้า/เซลเพจ" แถบด้านซ้ายมือ  2) คลิกที่การ์ด "สรุปออเดอร์" เพื่อเข้าสู่หน้าตรวจสอบสถานะสินค้าทั้งหมด',
        tip: 'ใช้หน้านี้เพื่อเช็คว่าเหลือสินค้าไหนที่ยังไม่ได้จัดส่ง',
        badge: 'เข้าหน้าสรุป',
        badgeType: 'indigo',
        image: 'assets/slides/check-status/slide_01.png'
      },
      {
        id: 'check-status-2',
        stepNumber: 2,
        title: 'เลือกช่วงวันที่ย้อนหลัง & กรองสถานะออเดอร์',
        description: 'แถวบนสามารถเลือกช่วงวันที่ต้องการดูย้อนหลัง (วันนี้, เมื่อวาน, 7 วันที่แล้ว, เดือนนี้, ปีนี้) และแถวล่างเลือกกรองสถานะ "จ่ายแล้ว", "ส่งแล้ว", หรือ "ยกเลิก"',
        tip: 'หากต้องการดูออเดอร์ที่รอแพ็คส่ง ให้กดที่ปุ่ม "จ่ายแล้ว"',
        badge: 'ตัวกรองข้อมูล',
        badgeType: 'amber',
        image: 'assets/slides/check-status/slide_02.png'
      },
      {
        id: 'check-status-3',
        stepNumber: 3,
        title: 'เช็คสถานะรายออเดอร์ในตาราง',
        description: 'ดูสถานะปัจจุบันของแต่ละออเดอร์ได้จากช่องสถานะด้านขวามือของการ์ด (เช่น จ่ายแล้ว, ส่งแล้ว) พร้อมรายละเอียดสลิปและเลขพัสดุ',
        tip: 'สามารถกด "ดูรวมแชท" เพื่อเปิดดูบทสนทนาของลูกค้ารายนั้นได้ทันที',
        badge: 'เช็ครายออเดอร์',
        badgeType: 'emerald',
        image: 'assets/slides/check-status/slide_03.png'
      }
    ]
  },
  {
    id: 'reprint-cover',
    number: '03',
    title: 'วิธีดูและดาวน์โหลดใบปะหน้าย้อนหลัง',
    shortTitle: 'ใบปะหน้าย้อนหลัง',
    badgeText: '3 ขั้นตอน',
    badgeColor: 'amber',
    summary: 'กรณีปิดหน้าต่างปริ้นไปแล้ว หรือต้องการดาวน์โหลดไฟล์ใบปะหน้าพัสดุย้อนหลังจากระบบ Zwiz เพื่อปริ้นซ้ำ',
    keyRule: 'กดลูกศรเล็กๆ ข้างปุ่ม "ส่งกับ SHIPPOP" เพื่อเข้าสู่ประวัติ Shippop Orders',
    iconSvg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
    steps: [
      {
        id: 'reprint-cover-1',
        stepNumber: 1,
        title: 'เข้าที่เมนู "ร้านค้า/เซลเพจ" แล้วเลือก "สรุปออเดอร์"',
        description: '1) กดที่เมนู "ร้านค้า/เซลเพจ" ทางด้านซ้ายมือ  2) กดเลือกการ์ดเมนู "สรุปออเดอร์"',
        tip: 'ทางเข้าเดียวกับหน้าตรวจสอบสถานะออเดอร์',
        badge: 'ขั้นตอนที่ 1',
        badgeType: 'indigo',
        image: 'assets/slides/reprint-cover/slide_01.png'
      },
      {
        id: 'reprint-cover-2',
        stepNumber: 2,
        title: 'กดปุ่มลูกศรชี้ลง ข้างปุ่ม "ส่งกับ SHIPPOP"',
        description: 'ในหน้าสรุปออเดอร์ ให้สังเกตปุ่มสีฟ้า "ส่งกับ SHIPPOP" แล้วคลิกที่ปุ่ม "ลูกศรชี้ลง" ด้านขวาของปุ่มนั้น',
        tip: 'ระวังอย่ากดตรงคำว่าส่งกับ SHIPPOP ให้กดตรงลูกศรสามเหลี่ยมด้านขวา',
        badge: 'จุดสังเกต',
        badgeType: 'amber',
        image: 'assets/slides/reprint-cover/slide_02.png'
      },
      {
        id: 'reprint-cover-3',
        stepNumber: 3,
        title: 'กดปุ่ม DOWNLOAD ในคอลัมน์ Print Cover',
        description: 'ระบบจะพามาหน้า Shippop Orders แสดงประวัติรอบการกดส่งตามวันและเวลา ให้กดปุ่มสีชมพู "DOWNLOAD" ในช่อง Print Cover เพื่อดาวน์โหลดใบปะหน้าได้เลย',
        tip: 'ดูวันและเวลาที่ทำรายการได้จากคอลัมน์ Time ด้านซ้ายสุด',
        badge: 'ดาวน์โหลดได้ทันที',
        badgeType: 'emerald',
        image: 'assets/slides/reprint-cover/slide_03.png'
      }
    ]
  },
  {
    id: 'cancel-order',
    number: '04',
    title: 'วิธียกเลิกสินค้า & สร้างคำสั่งซื้อใหม่ (#รับยอด)',
    shortTitle: 'ยกเลิกสินค้า',
    badgeText: '8 ขั้นตอนสำคัญ',
    badgeColor: 'rose',
    summary: 'ขั้นตอนการยกเลิกรายการที่กดส่งไปแล้ว (กรณีที่อยู่ผิด เปลี่ยนขนส่ง หรือลูกค้ายกเลิก) และวิธีสร้างคำสั่งซื้อใหม่ในแชทด้วยคำสั่ง #รับยอด',
    keyRule: 'กฎเหล็ก: ต้องดำเนินการยกเลิกทั้ง 2 ที่เสมอ คือ 1) แจ้งเลขพัสดุให้แอดมิน Shippop ยกเลิก และ 2) เปลี่ยนสถานะเป็นยกเลิกใน Zwiz',
    hasQuickCommand: true,
    iconSvg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    steps: [
      {
        id: 'cancel-order-1',
        stepNumber: 1,
        title: 'ต้องไปยกเลิกทั้งใน Zwiz และ Shippop',
        description: 'เมื่อต้องการยกเลิกรายการที่ออกเลขพัสดุแล้ว จะต้องทำควบคู่กันทั้งในระบบ Zwiz.ai และแจ้งยกเลิกกับทาง Shippop เพื่อไม่ให้ถูกคิดค่าขนส่งซ้ำซ้อน',
        tip: 'ห้ามยกเลิกแค่ใน Zwiz อย่างเดียว เพราะเลขพัสดุใน Shippop จะยังค้างอยู่ในระบบขนส่ง',
        badge: 'กฎสำคัญ',
        badgeType: 'rose',
        image: 'assets/slides/cancel-order/slide_01.png'
      },
      {
        id: 'cancel-order-2',
        stepNumber: 2,
        title: 'เข้าหน้ารวมแชท > เลือกแชท > ไปหน้าสรุปออเดอร์',
        description: '1) เข้าเมนู "รวมแชท"  2) เลือกแชทของลูกค้าที่ต้องการยกเลิก  3) กดปุ่มสีเขียว "สรุปออเดอร์" ในการ์ดคำสั่งซื้อด้านขวา',
        tip: 'หรือเข้าผ่านเมนู ร้านค้า/เซลเพจ > สรุปออเดอร์ ได้เช่นกัน',
        badge: 'ค้นหาออเดอร์',
        badgeType: 'indigo',
        image: 'assets/slides/cancel-order/slide_02.png'
      },
      {
        id: 'cancel-order-3',
        stepNumber: 3,
        title: 'คัดลอกเลขพัสดุ (SP...) ส่งแจ้งในแชท LINE Shippop',
        description: 'คัดลอกรหัสพัสดุที่ขึ้นต้นด้วย SP (เช่น SP858032418) จากช่องด้านขวา แล้วนำไปส่งในแชท LINE Official ของ "SHIPPOP" เพื่อแจ้งให้เจ้าหน้าที่ยกเลิกรายการขนส่งให้',
        tip: 'แจ้งแอดมิน Shippop ว่าขอยกเลิกเลขพัสดุดังกล่าว',
        badge: 'แจ้ง Shippop',
        badgeType: 'rose',
        image: 'assets/slides/cancel-order/slide_03.png'
      },
      {
        id: 'cancel-order-4',
        stepNumber: 4,
        title: 'คลิกที่ช่องสถานะออเดอร์ใน Zwiz (คำว่า "ส่งแล้ว")',
        description: 'กลับมาที่หน้าสรุปออเดอร์ในระบบ Zwiz ให้คลิกที่ดรอปดาวน์สถานะของออเดอร์นั้น (ซึ่งปัจจุบันแสดงเป็น "ส่งแล้ว")',
        tip: 'คลิกที่กล่องข้อความ "ส่งแล้ว" เพื่อเปิดเมนูเปลี่ยนสถานะ',
        badge: 'เปลี่ยนสถานะ',
        badgeType: 'amber',
        image: 'assets/slides/cancel-order/slide_04.png'
      },
      {
        id: 'cancel-order-5',
        stepNumber: 5,
        title: 'เลือกเปลี่ยนสถานะเป็น "ยกเลิก"',
        description: 'เมื่อรายการตัวเลือกแสดงขึ้นมา ให้คลิกเลือกที่คำว่า "ยกเลิก" ด้านล่างสุด',
        tip: 'เป็นการเคลียร์สถานะบิลเดิมใน Zwiz ให้เป็นบิลที่ถูกยกเลิก',
        badge: 'กดยกเลิก',
        badgeType: 'rose',
        image: 'assets/slides/cancel-order/slide_05.png'
      },
      {
        id: 'cancel-order-6',
        stepNumber: 6,
        title: 'ออเดอร์เดิมจะถูกย้ายไปอยู่ในแท็บ "ยกเลิก"',
        description: 'เมื่อกดยกเลิกแล้ว รายการออเดอร์ดังกล่าวจะถูกย้ายไปเก็บไว้ในแท็บสถานะ "ยกเลิก" ด้านบนตารางโดยอัตโนมัติ',
        tip: 'สามารถกดดูประวัติออเดอร์ที่ยกเลิกแล้วได้จากแท็บนี้',
        badge: 'ย้ายเข้าแท็บยกเลิก',
        badgeType: 'indigo',
        image: 'assets/slides/cancel-order/slide_06.png'
      },
      {
        id: 'cancel-order-7',
        stepNumber: 7,
        title: 'กลับมาที่เมนู "รวมแชท" (กรณีต้องการเปิดบิลส่งใหม่)',
        description: 'หากต้องการแก้ไขที่อยู่หรือเปลี่ยนขนส่งแล้วส่งใหม่ ให้คลิกกลับมาที่เมนู "รวมแชท" ทางด้านซ้ายมือ',
        tip: 'เราจะไปสร้างคำสั่งซื้อใบใหม่ให้กับลูกค้าในห้องแชท',
        badge: 'กลับหน้ารวมแชท',
        badgeType: 'indigo',
        image: 'assets/slides/cancel-order/slide_07.png'
      },
      {
        id: 'cancel-order-8',
        stepNumber: 8,
        title: 'พิมพ์ "#รับยอด (จำนวนเงิน)" แล้วรีเฟรชเว็บ 1 ครั้ง',
        description: '1) ในแชทลูกค้า พิมพ์ข้อความว่า #รับยอด ตามด้วยจำนวนเงิน (เช่น #รับยอด 100) แล้วกดส่ง  2) กดรีเฟรชหน้าเว็บ (F5) 1 ครั้ง จะเห็นคำสั่งซื้อใหม่ปรากฏขึ้นมาทางด้านขวา จากนั้นกรอกที่อยู่และดำเนินการส่งใหม่ได้เลย',
        tip: 'สามารถกดปุ่ม "คัดลอกคำสั่ง #รับยอด" ด้านบนของหมวดนี้เพื่อนำไปวางได้ทันที',
        badge: 'สร้างบิลใหม่สำเร็จ',
        badgeType: 'emerald',
        image: 'assets/slides/cancel-order/slide_08.png'
      }
    ]
  },
  {
    id: 'shippop-web',
    number: '05',
    title: 'วิธีใช้งานเว็บ Shippop โดยตรง',
    shortTitle: 'เว็บ Shippop',
    badgeText: '9 ขั้นตอน',
    badgeColor: 'indigo',
    summary: 'คู่มือการเข้าสร้างรายการส่งพัสดุผ่านหน้าเว็บไซต์ Shippop Business โดยตรง และการพิมพ์ใบปะหน้าพัสดุซ้ำย้อนหลัง',
    keyRule: 'เมื่อสร้างรายการในเว็บ Shippop อย่าลืมกด "เลือกที่อยู่" แล้วเปลี่ยนผู้ส่งต้นทางเป็น "มรุกข" ทุกครั้ง',
    iconSvg: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    steps: [
      {
        id: 'shippop-web-1',
        stepNumber: 1,
        title: 'คลิกเมนู "รายการส่งของ" > "สร้างรายการ"',
        description: 'ในหน้าเว็บ SHIPPOP Business ให้คลิกที่เมนู "รายการส่งของ" ด้านบน แล้วเลือกหัวข้อ "สร้างรายการ"',
        tip: 'ใช้เมื่อต้องการคีย์ส่งพัสดุผ่านหน้าเว็บ Shippop โดยตรง',
        badge: 'ส่วนที่ 1: สร้างรายการ',
        badgeType: 'indigo',
        image: 'assets/slides/shippop-web/slide_01.png'
      },
      {
        id: 'shippop-web-2',
        stepNumber: 2,
        title: 'กดปุ่ม "เลือกที่อยู่" เพื่อเปลี่ยนที่อยู่ผู้ส่งเป็น "มรุกข"',
        description: 'ในส่วน ต้นทาง / ผู้จัดส่ง ด้านบน ให้กดปุ่ม "เลือกที่อยู่" ที่อยู่ท้ายช่องชื่อผู้ส่ง เพื่อเปลี่ยนจากชื่อบุคคลเป็นชื่อร้านมรุกข',
        tip: 'ห้ามข้ามขั้นตอนนี้ เพื่อให้ชื่อผู้ส่งบนใบปะหน้าเป็นร้านมรุกข',
        badge: 'สำคัญมาก',
        badgeType: 'amber',
        image: 'assets/slides/shippop-web/slide_02.png'
      },
      {
        id: 'shippop-web-3',
        stepNumber: 3,
        title: 'กดปุ่ม “ใช้ที่อยู่นี้” ของร้านมรุกข',
        description: 'ในหน้าต่างสมุดที่อยู่ ให้มองหารายการที่อยู่ของ "มรุกข" แล้วคลิกปุ่มสีฟ้า "ใช้ที่อยู่นี้"',
        tip: 'ข้อมูลชื่อ เบอร์โทร และที่อยู่ต้นทางจะถูกเปลี่ยนเป็นของร้านมรุกขทันที',
        badge: 'เลือกที่อยู่ต้นทาง',
        badgeType: 'indigo',
        image: 'assets/slides/shippop-web/slide_03.png'
      },
      {
        id: 'shippop-web-4',
        stepNumber: 4,
        title: 'กรอกชื่อ เบอร์โทร ที่อยู่ลูกค้าปลายทาง แล้วกด "บันทึก"',
        description: 'ในส่วน ปลายทาง / ผู้รับ ให้กรอกข้อมูลลูกค้า (หรือวางในช่องรวมข้อมูล) ตรวจสอบชื่อ เบอร์โทร ที่อยู่ และรหัสไปรษณีย์ให้ครบถ้วน แล้วกดปุ่มสีฟ้า "บันทึก"',
        tip: 'หากส่งหลายกล่อง สามารถกดบันทึกทีละรายชื่อลงในรายการด้านล่างได้',
        badge: 'กรอกผู้รับปลายทาง',
        badgeType: 'indigo',
        image: 'assets/slides/shippop-web/slide_04.png'
      },
      {
        id: 'shippop-web-5',
        stepNumber: 5,
        title: 'กดปุ่ม "เลือกขนส่ง" ที่ต้องการจะส่ง',
        description: 'เมื่อรายการผู้รับปรากฏขึ้นด้านล่าง ให้คลิกปุ่มสีส้ม "เลือกขนส่ง" แล้วเลือกบริษัทขนส่งที่ต้องการ',
        tip: 'ตรวจสอบราคาและเงื่อนไขการเข้ารับพัสดุของแต่ละขนส่งก่อนเลือก',
        badge: 'เลือกขนส่ง',
        badgeType: 'amber',
        image: 'assets/slides/shippop-web/slide_05.png'
      },
      {
        id: 'shippop-web-6',
        stepNumber: 6,
        title: 'ตรวจสอบรายการแล้วกดปุ่ม "ยืนยัน"',
        description: 'เมื่อเลือกขนส่งเรียบร้อยแล้ว ให้ตรวจสอบความถูกต้องทั้งหมดอีกครั้ง จากนั้นคลิกปุ่มสีส้ม "ยืนยัน" มุมขวาล่าง',
        tip: 'เมื่อกดยืนยันแล้ว ระบบจะสร้างหมายเลขใบสั่งซื้อทันที',
        badge: 'ยืนยันรายการ',
        badgeType: 'emerald',
        image: 'assets/slides/shippop-web/slide_06.png'
      },
      {
        id: 'shippop-web-7',
        stepNumber: 7,
        title: 'กดปุ่ม "พิมพ์ใบปะหน้า"',
        description: 'ในหน้าผลการทำรายการ (ทำรายการเรียบร้อยแล้ว) ให้คลิกปุ่มสีฟ้า "พิมพ์ใบปะหน้า" เพื่อสั่งพิมพ์ใบปะหน้าพัสดุสำหรับติดกล่อง',
        tip: 'กรุณาปริ้นใบจัดส่งสินค้าและให้พนักงานขนส่งเซ็นรับพัสดุทุกครั้ง',
        badge: 'พิมพ์ใบปะหน้าทันที',
        badgeType: 'emerald',
        image: 'assets/slides/shippop-web/slide_07.png'
      },
      {
        id: 'shippop-web-8',
        stepNumber: 8,
        title: '[กรณีพิมพ์ใบปะหน้าใหม่] เข้าเมนู "พิมพ์ใบจัดส่ง/ใบปะหน้า"',
        description: 'หากต้องการพิมพ์ใบปะหน้าพัสดุซ้ำในภายหลัง ให้คลิกที่เมนู "รายการส่งของ" ด้านบน แล้วเลือก "พิมพ์ใบจัดส่ง/ใบปะหน้า"',
        tip: 'ใช้กรณีลืมปริ้นในหน้าแรก หรือต้องการปริ้นซ้ำ',
        badge: 'ส่วนที่ 2: พิมพ์ใบปะหน้าซ้ำ',
        badgeType: 'amber',
        image: 'assets/slides/shippop-web/slide_09.png'
      },
      {
        id: 'shippop-web-9',
        stepNumber: 9,
        title: '[กรณีพิมพ์ใบปะหน้าใหม่] กดปุ่ม "พิมพ์ใบปะหน้า" ในตาราง',
        description: 'ในหน้ารายการจากรหัสใบสั่งซื้อ สามารถเลือกวันที่ที่ทำรายการ แล้วคลิกปุ่ม "พิมพ์ใบปะหน้า" ท้ายแถวรายการที่ต้องการได้เลย',
        tip: 'สามารถเลือกขนาดใบปะหน้าที่ต้องการพิมพ์ได้ตามปกติ',
        badge: 'พิมพ์ย้อนหลังสำเร็จ',
        badgeType: 'emerald',
        image: 'assets/slides/shippop-web/slide_10.png'
      }
    ]
  }
];

// ============================================================================
// Lightweight IndexedDB Helper (idb-keyval pattern per Section 6 Guidelines)
// ============================================================================
const DB_NAME = 'zwiz_shippop_manual_db';
const STORE_NAME = 'keyval';

const idbStorage = {
  dbPromise: null,
  init() {
    if (!('indexedDB' in window)) return Promise.resolve(null);
    if (!this.dbPromise) {
      this.dbPromise = new Promise((resolve) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => {
          req.result.createObjectStore(STORE_NAME);
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      });
    }
    return this.dbPromise;
  },
  async get(key) {
    try {
      const db = await this.init();
      if (!db) {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      }
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const req = tx.objectStore(STORE_NAME).get(key);
        req.onsuccess = () => resolve(req.result ?? null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      return null;
    }
  },
  async set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
    try {
      const db = await this.init();
      if (!db) return;
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).put(val, key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      });
    } catch (e) {}
  }
};

// ============================================================================
// Application State (Default to Home Topic Selection List: activeCategoryId = null)
// ============================================================================
const state = {
  activeCategoryId: null, // null = Home Topic List View, string = Specific Topic View
  viewMode: 'grid', // 'grid' | 'slide'
  activeSlideIndex: 0,
  searchQuery: '',
  completedSteps: {}, // { [stepId]: true }
  lightboxOpen: false,
  lightboxSteps: [],
  lightboxIndex: 0,
  lightboxZoomed: false,
  cheatsheetOpen: false,
  toastTimer: null,
  undoAction: null
};

// ============================================================================
// SVG Icons (No text emojis per Section 5 Guidelines)
// ============================================================================
const ICONS = {
  sun: `<svg class="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg class="w-4 h-4 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  checkCircle: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  circle: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
  zoomIn: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  info: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  alertTriangle: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  copy: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  reset: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
  arrowLeft: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowRight: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  list: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`
};

function getBadgeClasses(type) {
  switch (type) {
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
    case 'amber':
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
    case 'rose':
      return 'bg-rose-500/10 text-rose-600 dark:text-rose-400';
    default:
      return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400';
  }
}

function getIconBoxClasses(type) {
  switch (type) {
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    case 'amber':
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    case 'rose':
      return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
    default:
      return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
  }
}

// ============================================================================
// Theme Management (Light Mode Baseline + Dark Mode + Meta Theme Color)
// ============================================================================
function updateThemeUI() {
  const isDark = document.documentElement.classList.contains('dark');
  const metaTheme = document.getElementById('meta-theme-color');
  if (metaTheme) {
    metaTheme.setAttribute('content', isDark ? '#030712' : '#f8fafc');
  }
  document.querySelectorAll('.theme-icon-container').forEach((el) => {
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  try {
    localStorage.setItem('zwiz_manual_theme', isDark ? 'dark' : 'light');
  } catch (e) {}
  updateThemeUI();
  showToast(isDark ? 'เปลี่ยนเป็นโหมดกลางคืน (Dark Mode)' : 'เปลี่ยนเป็นโหมดสว่างมาตรฐาน (Light Mode)');
}

// ============================================================================
// Toast Notification with Optimistic Undo (Section 4D Guidelines)
// ============================================================================
function showToast(message, undoCallback = null) {
  const container = document.getElementById('toast-container');
  const msgEl = document.getElementById('toast-message');
  const undoBtn = document.getElementById('btn-toast-undo');

  if (!container || !msgEl || !undoBtn) return;

  if (state.toastTimer) {
    clearTimeout(state.toastTimer);
  }

  msgEl.textContent = message;
  state.undoAction = undoCallback;

  if (typeof undoCallback === 'function') {
    undoBtn.classList.remove('hidden');
  } else {
    undoBtn.classList.add('hidden');
  }

  container.classList.remove('hidden');

  state.toastTimer = setTimeout(() => {
    container.classList.add('hidden');
    state.undoAction = null;
  }, 5000);
}

// ============================================================================
// Checklist Persistence & Optimistic Updates
// ============================================================================
async function loadChecklistState() {
  const saved = await idbStorage.get('completed_steps');
  if (saved && typeof saved === 'object') {
    state.completedSteps = saved;
    renderAll();
  }
}

function toggleStepCompleted(stepId, stepTitle = '') {
  const prevSnapshot = { ...state.completedSteps };
  const isNowDone = !state.completedSteps[stepId];

  if (isNowDone) {
    state.completedSteps[stepId] = true;
  } else {
    delete state.completedSteps[stepId];
  }

  idbStorage.set('completed_steps', state.completedSteps);
  renderAll();
  if (state.lightboxOpen) {
    updateLightboxContent();
  }

  showToast(
    isNowDone
      ? `ทำเครื่องหมายเสร็จแล้ว: ${stepTitle || 'ขั้นตอนนี้'}`
      : `ยกเลิกเครื่องหมาย: ${stepTitle || 'ขั้นตอนนี้'}`,
    () => {
      state.completedSteps = prevSnapshot;
      idbStorage.set('completed_steps', state.completedSteps);
      renderAll();
      if (state.lightboxOpen) updateLightboxContent();
    }
  );
}

function resetCategoryChecklist(categoryId) {
  const category = MANUAL_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return;

  const prevSnapshot = { ...state.completedSteps };
  let hadAny = false;
  category.steps.forEach((s) => {
    if (state.completedSteps[s.id]) {
      hadAny = true;
      delete state.completedSteps[s.id];
    }
  });

  if (!hadAny) {
    showToast('ยังไม่มีขั้นตอนที่ถูกติ๊กในหมวดนี้');
    return;
  }

  idbStorage.set('completed_steps', state.completedSteps);
  renderAll();

  showToast(`รีเซ็ตเช็คลิสต์หมวด "${category.shortTitle}" แล้ว`, () => {
    state.completedSteps = prevSnapshot;
    idbStorage.set('completed_steps', state.completedSteps);
    renderAll();
  });
}

// ============================================================================
// Copy Quick Command Helper
// ============================================================================
async function copyQuickCommand(text = '#รับยอด 100') {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`คัดลอกคำสั่ง "${text}" เรียบร้อยแล้ว`);
  } catch (e) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(`คัดลอกคำสั่ง "${text}" เรียบร้อยแล้ว`);
  }
}

// ============================================================================
// Navigation Between Home Topic List & Topic Detail View
// ============================================================================
function goHomeList(pushHash = true) {
  state.activeCategoryId = null;
  state.activeSlideIndex = 0;
  if (state.searchQuery.trim()) {
    state.searchQuery = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    updateSearchClearButton();
  }
  if (pushHash && window.location.hash) {
    history.pushState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderAll();
}

function selectCategory(categoryId, pushHash = true) {
  const exists = MANUAL_CATEGORIES.some((c) => c.id === categoryId);
  if (!exists) return;

  state.activeCategoryId = categoryId;
  state.activeSlideIndex = 0;
  if (state.searchQuery.trim()) {
    state.searchQuery = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    updateSearchClearButton();
  }
  if (pushHash) {
    history.pushState({ categoryId }, '', `#${categoryId}`);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  triggerSkeletonTransition(() => renderAll());
}

// ============================================================================
// Skeleton Transition Helper (Section 4B Guidelines)
// ============================================================================
function triggerSkeletonTransition(callback) {
  const skeleton = document.getElementById('skeleton-container');
  const stepsContainer = document.getElementById('steps-container');
  const homeContainer = document.getElementById('home-view-container');
  if (!skeleton || !stepsContainer) {
    callback();
    return;
  }

  if (homeContainer) homeContainer.classList.add('hidden');
  stepsContainer.classList.add('hidden');
  skeleton.classList.remove('hidden');

  setTimeout(() => {
    skeleton.classList.add('hidden');
    callback();
  }, 150);
}

// ============================================================================
// Rendering Functions
// ============================================================================
function getActiveCategory() {
  return MANUAL_CATEGORIES.find((c) => c.id === state.activeCategoryId) || null;
}

function getFilteredSteps() {
  const q = state.searchQuery.trim().toLowerCase();
  if (!q) {
    const cat = getActiveCategory();
    if (!cat) return [];
    return cat.steps.map((s) => ({ ...s, categoryTitle: cat.shortTitle, categoryId: cat.id }));
  }

  // Search across ALL 5 categories when user types a query
  const results = [];
  MANUAL_CATEGORIES.forEach((cat) => {
    cat.steps.forEach((s) => {
      const haystack = `${s.title} ${s.description} ${s.tip} ${s.badge} ${cat.title}`.toLowerCase();
      if (haystack.includes(q)) {
        results.push({ ...s, categoryTitle: cat.shortTitle, categoryId: cat.id });
      }
    });
  });
  return results;
}

/**
 * Renders the Default Home View: A clean, interactive List of the 5 Manual Topics
 */
function renderHomeTopicList() {
  const homeContainer = document.getElementById('home-view-container');
  if (!homeContainer) return;

  const totalStepsCount = MANUAL_CATEGORIES.reduce((acc, c) => acc + c.steps.length, 0);
  const totalDoneCount = Object.keys(state.completedSteps).length;

  homeContainer.innerHTML = `
    <!-- Intro Banner -->
    <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="space-y-1">
        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          ${ICONS.list}
          <span>สารบัญคู่มือพนักงานขาย (เลือกหัวข้อที่ต้องการดู)</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          เลือกหัวข้อคู่มือการใช้งานที่ต้องการดู
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          คลิกเลือกหัวข้อจากรายการด้านล่างเพื่อดูขั้นตอนและภาพชี้จุดประกอบทีละขั้นตอน
        </p>
      </div>
      <div class="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 shrink-0 text-right">
        <div class="text-xs text-slate-500 dark:text-slate-400">ความคืบหน้าเช็คลิสต์รวม</div>
        <div class="text-base font-bold text-indigo-600 dark:text-indigo-400">${totalDoneCount} / ${totalStepsCount} ขั้นตอน</div>
      </div>
    </div>

    <!-- Vertical List of 5 Manual Topics -->
    <div class="space-y-3.5" role="list">
      ${MANUAL_CATEGORIES.map((cat, idx) => {
        const doneCount = cat.steps.filter((s) => state.completedSteps[s.id]).length;
        const totalCount = cat.steps.length;
        const coverImg = cat.steps[0]?.image || '';

        return `
          <div
            role="listitem"
            data-select-topic="${cat.id}"
            class="group bg-white dark:bg-slate-900/60 hover:bg-slate-50/80 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-200 cursor-pointer active:scale-[0.99] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <!-- Left Side: Number + Icon + Title + Summary -->
            <div class="flex items-start gap-4 min-w-0 flex-1">
              <div class="w-12 h-12 rounded-xl border ${getIconBoxClasses(cat.badgeColor)} flex flex-col items-center justify-center shrink-0 mt-0.5">
                <span class="text-[10px] font-bold leading-none opacity-75">หมวด</span>
                <span class="text-base font-bold leading-tight">${idx + 1}</span>
              </div>

              <div class="space-y-1.5 min-w-0 flex-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    ${idx + 1}. ${escapeHtml(cat.title)}
                  </h3>
                  <span class="px-2.5 py-0.5 rounded-md text-xs font-bold ${getBadgeClasses(cat.badgeColor)} inline-flex items-center gap-1">
                    ${cat.iconSvg}
                    <span>${cat.badgeText}</span>
                  </span>
                  ${
                    doneCount > 0
                      ? `<span class="px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1">
                          ${ICONS.checkCircle}
                          <span>ทำแล้ว ${doneCount}/${totalCount}</span>
                        </span>`
                      : ''
                  }
                </div>

                <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  ${escapeHtml(cat.summary)}
                </p>

                <div class="pt-1 flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                  ${ICONS.alertTriangle}
                  <span class="truncate">${escapeHtml(cat.keyRule)}</span>
                </div>
              </div>
            </div>

            <!-- Right Side: Preview Thumbnail & Open Button -->
            <div class="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/80 shrink-0">
              <div class="hidden md:block w-28 aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                <img src="${coverImg}" alt="${escapeHtml(cat.title)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <span class="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 group-hover:bg-indigo-600 text-indigo-600 dark:text-indigo-300 group-hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm">
                <span>เปิดดูคู่มือ</span>
                ${ICONS.arrowRight}
              </span>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Bottom Quick Helper Card on Home Page -->
    <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex items-start gap-3.5">
        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
          ${ICONS.copy}
        </div>
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">
            คำสั่งด่วนสำหรับสร้างคำสั่งซื้อใหม่ในแชทลูกค้า
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            พิมพ์ <code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-indigo-600 dark:text-indigo-400 font-bold">#รับยอด (จำนวนเงิน)</code> เช่น <code class="font-mono">#รับยอด 100</code> ในแชทลูกค้าแล้วรีเฟรชหน้าเว็บ 1 ครั้ง
          </p>
        </div>
      </div>
      <button
        type="button"
        id="btn-home-copy-cmd"
        class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 active:scale-95 transition inline-flex items-center gap-2 shrink-0 self-start sm:self-center"
      >
        ${ICONS.copy}
        <span>คัดลอก #รับยอด 100</span>
      </button>
    </div>
  `;

  homeContainer.querySelectorAll('[data-select-topic]').forEach((item) => {
    item.addEventListener('click', () => {
      const topicId = item.getAttribute('data-select-topic');
      selectCategory(topicId);
    });
  });

  document.getElementById('btn-home-copy-cmd')?.addEventListener('click', (e) => {
    e.stopPropagation();
    copyQuickCommand('#รับยอด 100');
  });
}

function renderCategoryTabs() {
  const nav = document.getElementById('category-tabs');
  if (!nav) return;

  const isTopicOrSearchView = state.activeCategoryId !== null || state.searchQuery.trim().length > 0;
  if (!isTopicOrSearchView) {
    nav.classList.add('hidden');
    return;
  }

  nav.classList.remove('hidden');

  const homeBtnHtml = `
    <button
      type="button"
      id="btn-nav-back-home"
      class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 inline-flex items-center gap-1.5 shrink-0 border bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100 hover:opacity-90 shadow-sm"
    >
      ${ICONS.arrowLeft}
      <span>หน้าแรก (เลือกหัวข้อ)</span>
    </button>
  `;

  const tabsHtml = MANUAL_CATEGORIES.map((cat, idx) => {
    const isActive = cat.id === state.activeCategoryId && !state.searchQuery.trim();
    const doneCount = cat.steps.filter((s) => state.completedSteps[s.id]).length;
    const totalCount = cat.steps.length;

    const baseClasses =
      'px-3.5 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95 inline-flex items-center gap-2 shrink-0 border';
    const activeClasses =
      'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20';
    const inactiveClasses =
      'bg-white dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800';

    return `
      <button
        type="button"
        data-category-id="${cat.id}"
        class="${baseClasses} ${isActive ? activeClasses : inactiveClasses}"
      >
        <span>${idx + 1}. ${escapeHtml(cat.shortTitle)}</span>
        <span class="px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
          isActive
            ? 'bg-white/20 text-white'
            : doneCount === totalCount
            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
        }">
          ${doneCount > 0 ? `${doneCount}/${totalCount}` : `${totalCount}`}
        </span>
      </button>
    `;
  }).join('');

  nav.innerHTML = homeBtnHtml + tabsHtml;

  document.getElementById('btn-nav-back-home')?.addEventListener('click', () => {
    goHomeList();
  });

  nav.querySelectorAll('button[data-category-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-category-id');
      selectCategory(targetId);
    });
  });
}

function renderCategoryHeader(filteredSteps) {
  const headerEl = document.getElementById('category-header');
  if (!headerEl) return;

  if (state.searchQuery.trim()) {
    headerEl.classList.remove('hidden');
    headerEl.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-2">
            ${ICONS.info}
            <span>ผลการค้นหาจากทุกหมวดหมู่</span>
          </div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            คำค้นหา: "${escapeHtml(state.searchQuery)}" (พบ ${filteredSteps.length} ขั้นตอน)
          </h2>
        </div>
        <button
          type="button"
          id="btn-clear-search-banner"
          class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 active:scale-95 transition inline-flex items-center gap-1.5 self-start sm:self-center"
        >
          ${ICONS.arrowLeft}
          <span>ล้างการค้นหา / กลับหน้าแรก</span>
        </button>
      </div>
    `;
    document.getElementById('btn-clear-search-banner')?.addEventListener('click', () => {
      goHomeList();
    });
    return;
  }

  const cat = getActiveCategory();
  if (!cat) {
    headerEl.classList.add('hidden');
    return;
  }

  headerEl.classList.remove('hidden');
  const doneCount = cat.steps.filter((s) => state.completedSteps[s.id]).length;
  const totalCount = cat.steps.length;
  const progressPct = Math.round((doneCount / totalCount) * 100);

  headerEl.innerHTML = `
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div class="space-y-2.5 max-w-3xl">
        <div class="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            id="btn-banner-back-home"
            class="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 active:scale-95 transition inline-flex items-center gap-1.5"
          >
            ${ICONS.arrowLeft}
            <span>เลือกหัวข้ออื่น</span>
          </button>
          <span class="px-2.5 py-1 rounded-md text-xs font-bold ${getBadgeClasses(cat.badgeColor)} inline-flex items-center gap-1.5">
            ${cat.iconSvg}
            <span>${cat.badgeText}</span>
          </span>
          <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 inline-flex items-center gap-1.5">
            ${ICONS.alertTriangle}
            <span>${cat.keyRule}</span>
          </span>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          ${cat.title}
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          ${cat.summary}
        </p>
      </div>

      <!-- Right Action & Progress Box -->
      <div class="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-3 shrink-0 bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800">
        <div class="w-full sm:w-48 space-y-1.5">
          <div class="flex items-center justify-between text-xs font-semibold">
            <span class="text-slate-600 dark:text-slate-400">เช็คลิสต์ทำตามขั้นตอน</span>
            <span class="text-indigo-600 dark:text-indigo-400">${doneCount}/${totalCount} (${progressPct}%)</span>
          </div>
          <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div class="h-full bg-emerald-500 transition-all duration-300" style="width: ${progressPct}%"></div>
          </div>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
          ${
            cat.hasQuickCommand
              ? `
            <button
              type="button"
              id="btn-copy-quick-banner"
              class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm active:scale-95 transition inline-flex items-center gap-1.5"
            >
              ${ICONS.copy}
              <span>คัดลอก #รับยอด 100</span>
            </button>
          `
              : ''
          }
          <button
            type="button"
            id="btn-reset-checklist"
            class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold active:scale-95 transition inline-flex items-center gap-1.5"
          >
            ${ICONS.reset}
            <span>รีเซ็ตเช็คลิสต์</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-banner-back-home')?.addEventListener('click', () => {
    goHomeList();
  });

  document.getElementById('btn-copy-quick-banner')?.addEventListener('click', () => {
    copyQuickCommand('#รับยอด 100');
  });

  document.getElementById('btn-reset-checklist')?.addEventListener('click', () => {
    resetCategoryChecklist(cat.id);
  });
}

function renderStepsContent(filteredSteps) {
  const container = document.getElementById('steps-container');
  const emptyState = document.getElementById('empty-state');
  const homeContainer = document.getElementById('home-view-container');
  const viewModeWrapper = document.getElementById('view-mode-wrapper');
  if (!container || !emptyState || !homeContainer) return;

  const isHomeView = state.activeCategoryId === null && !state.searchQuery.trim();

  if (isHomeView) {
    homeContainer.classList.remove('hidden');
    container.classList.add('hidden');
    emptyState.classList.add('hidden');
    viewModeWrapper?.classList.add('hidden');
    renderHomeTopicList();
    return;
  }

  homeContainer.classList.add('hidden');
  viewModeWrapper?.classList.remove('hidden');

  if (filteredSteps.length === 0) {
    container.innerHTML = '';
    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.classList.remove('hidden');

  if (state.viewMode === 'slide') {
    renderSlideWalkthroughMode(container, filteredSteps);
  } else {
    renderGridCardsMode(container, filteredSteps);
  }
}

function renderGridCardsMode(container, steps) {
  container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5';

  container.innerHTML = steps
    .map((step, idx) => {
      const isDone = !!state.completedSteps[step.id];
      return `
      <article
        class="group bg-white dark:bg-slate-900/60 border ${
          isDone
            ? 'border-emerald-500/50 dark:border-emerald-500/40 ring-1 ring-emerald-500/20'
            : 'border-slate-200 dark:border-slate-800'
        } rounded-xl p-3.5 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-200 flex flex-col justify-between"
      >
        <div>
          <!-- Image Box with Hover Overlay & Quick Actions (Section 3 Guidelines) -->
          <div
            class="relative aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 mb-3.5 cursor-pointer"
            data-open-lightbox="${idx}"
          >
            <img
              src="${step.image}"
              alt="${escapeHtml(step.title)}"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <!-- Step Number Pill Top-Left -->
            <div class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-sm text-white text-xs font-bold shadow-md flex items-center gap-1.5">
              <span>ขั้นตอนที่ ${step.stepNumber}</span>
              ${
                state.searchQuery.trim()
                  ? `<span class="text-indigo-300 font-normal">• ${escapeHtml(step.categoryTitle)}</span>`
                  : ''
              }
            </div>

            <!-- Hover Dark Overlay & Quick Action Buttons -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2.5">
              <span class="px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg inline-flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition duration-200">
                ${ICONS.zoomIn}
                <span>คลิกขยายดูภาพใหญ่</span>
              </span>
            </div>
          </div>

          <!-- Status Badge & Title -->
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-1 rounded-md text-xs font-bold ${getBadgeClasses(step.badgeType)} inline-flex items-center gap-1.5">
              ${ICONS.info}
              <span>${escapeHtml(step.badge)}</span>
            </span>
            <button
              type="button"
              data-toggle-step="${step.id}"
              data-step-title="${escapeHtml(step.title)}"
              class="px-2.5 py-1 rounded-md text-xs font-bold transition active:scale-95 inline-flex items-center gap-1.5 border ${
                isDone
                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
              }"
            >
              ${isDone ? ICONS.checkCircle : ICONS.circle}
              <span>${isDone ? 'ทำแล้ว' : 'ติ๊กเมื่อทำเสร็จ'}</span>
            </button>
          </div>

          <h3
            class="text-base font-bold text-slate-900 dark:text-slate-100 mb-1.5 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            data-open-lightbox="${idx}"
          >
            ${escapeHtml(step.title)}
          </h3>

          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            ${escapeHtml(step.description)}
          </p>
        </div>

        <!-- Tip Box at Bottom of Card -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span class="text-amber-500 mt-0.5">${ICONS.alertTriangle}</span>
          <span>${escapeHtml(step.tip)}</span>
        </div>
      </article>
    `;
    })
    .join('');

  container.querySelectorAll('[data-open-lightbox]').forEach((el) => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.getAttribute('data-open-lightbox'), 10);
      openLightbox(steps, idx);
    });
  });

  container.querySelectorAll('[data-toggle-step]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-toggle-step');
      const title = btn.getAttribute('data-step-title');
      toggleStepCompleted(id, title);
    });
  });
}

function renderSlideWalkthroughMode(container, steps) {
  if (state.activeSlideIndex >= steps.length) {
    state.activeSlideIndex = 0;
  }
  const currentStep = steps[state.activeSlideIndex];
  const isDone = !!state.completedSteps[currentStep.id];

  container.className = 'max-w-4xl mx-auto';
  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <!-- Top Slide Bar -->
      <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-900/80">
        <div class="flex items-center gap-2.5">
          <span class="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold">
            ขั้นตอนที่ ${currentStep.stepNumber} จาก ${steps.length}
          </span>
          <span class="px-2.5 py-1 rounded-md text-xs font-bold ${getBadgeClasses(currentStep.badgeType)} inline-flex items-center gap-1">
            ${ICONS.info}
            <span>${escapeHtml(currentStep.badge)}</span>
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            id="btn-slide-toggle-done"
            class="px-3 py-1.5 rounded-xl text-xs font-bold border transition active:scale-95 inline-flex items-center gap-1.5 ${
              isDone
                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }"
          >
            ${isDone ? ICONS.checkCircle : ICONS.circle}
            <span>${isDone ? 'ทำขั้นตอนนี้แล้ว' : 'ทำเครื่องหมายว่าทำแล้ว'}</span>
          </button>
          <button
            type="button"
            id="btn-slide-zoom"
            class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 active:scale-95 transition inline-flex items-center gap-1.5"
          >
            ${ICONS.zoomIn}
            <span>ขยายเต็มจอ</span>
          </button>
        </div>
      </div>

      <!-- Large Slide Image -->
      <div
        id="slide-main-image-box"
        class="relative bg-slate-100 dark:bg-slate-950 flex items-center justify-center cursor-pointer overflow-hidden group"
      >
        <img
          src="${currentStep.image}"
          alt="${escapeHtml(currentStep.title)}"
          class="w-full max-h-[60vh] object-contain transition duration-300"
        />
      </div>

      <!-- Slide Details & Step Dots -->
      <div class="p-6 space-y-4">
        <div>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1.5">
            ${escapeHtml(currentStep.title)}
          </h3>
          <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
            ${escapeHtml(currentStep.description)}
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 text-xs sm:text-sm text-amber-700 dark:text-amber-300">
          <span class="mt-0.5">${ICONS.alertTriangle}</span>
          <span><strong>ข้อควรระวัง / จุดสังเกต:</strong> ${escapeHtml(currentStep.tip)}</span>
        </div>

        <!-- Step Navigation Footer -->
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-1.5 flex-wrap justify-center">
            ${steps
              .map(
                (s, i) => `
              <button
                type="button"
                data-slide-jump="${i}"
                class="w-7 h-7 rounded-lg text-xs font-bold transition active:scale-95 ${
                  i === state.activeSlideIndex
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : state.completedSteps[s.id]
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }"
              >
                ${s.stepNumber}
              </button>
            `
              )
              .join('')}
          </div>

          <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              id="btn-slide-prev"
              ${state.activeSlideIndex === 0 ? 'disabled' : ''}
              class="flex-1 sm:flex-initial justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:pointer-events-none active:scale-95 transition inline-flex items-center gap-1.5"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              ขั้นตอนก่อนหน้า
            </button>
            <button
              type="button"
              id="btn-slide-next"
              ${state.activeSlideIndex === steps.length - 1 ? 'disabled' : ''}
              class="flex-1 sm:flex-initial justify-center px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 disabled:opacity-40 disabled:pointer-events-none active:scale-95 transition inline-flex items-center gap-1.5"
            >
              ขั้นตอนถัดไป
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-slide-toggle-done')?.addEventListener('click', () => {
    toggleStepCompleted(currentStep.id, currentStep.title);
  });

  document.getElementById('btn-slide-zoom')?.addEventListener('click', () => {
    openLightbox(steps, state.activeSlideIndex);
  });

  document.getElementById('slide-main-image-box')?.addEventListener('click', () => {
    openLightbox(steps, state.activeSlideIndex);
  });

  document.getElementById('btn-slide-prev')?.addEventListener('click', () => {
    if (state.activeSlideIndex > 0) {
      state.activeSlideIndex--;
      renderStepsContent(steps);
    }
  });

  document.getElementById('btn-slide-next')?.addEventListener('click', () => {
    if (state.activeSlideIndex < steps.length - 1) {
      state.activeSlideIndex++;
      renderStepsContent(steps);
    }
  });

  container.querySelectorAll('[data-slide-jump]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeSlideIndex = parseInt(btn.getAttribute('data-slide-jump'), 10);
      renderStepsContent(steps);
    });
  });
}

function renderViewModeButtons() {
  const btnGrid = document.getElementById('btn-view-grid');
  const btnSlide = document.getElementById('btn-view-slide');
  if (!btnGrid || !btnSlide) return;

  const activeCls =
    'px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm';
  const inactiveCls =
    'px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200';

  btnGrid.className = state.viewMode === 'grid' ? activeCls : inactiveCls;
  btnSlide.className = state.viewMode === 'slide' ? activeCls : inactiveCls;
}

function renderAll() {
  const filteredSteps = getFilteredSteps();
  renderCategoryTabs();
  renderCategoryHeader(filteredSteps);
  renderViewModeButtons();
  renderStepsContent(filteredSteps);
}

// ============================================================================
// Lightbox Modal Controls (Section 2 Guidelines)
// ============================================================================
function openLightbox(steps, index) {
  state.lightboxSteps = steps;
  state.lightboxIndex = index;
  state.lightboxOpen = true;
  state.lightboxZoomed = false;

  const backdrop = document.getElementById('lightbox-backdrop');
  if (backdrop) {
    backdrop.classList.remove('hidden');
  }
  updateLightboxContent();
}

function closeLightbox() {
  state.lightboxOpen = false;
  state.lightboxZoomed = false;
  const backdrop = document.getElementById('lightbox-backdrop');
  if (backdrop) {
    backdrop.classList.add('hidden');
  }
}

function updateLightboxContent() {
  const step = state.lightboxSteps[state.lightboxIndex];
  if (!step) return;

  const badgeEl = document.getElementById('lightbox-step-badge');
  const titleEl = document.getElementById('lightbox-title');
  const imgEl = document.getElementById('lightbox-image');
  const descEl = document.getElementById('lightbox-desc');
  const tipEl = document.getElementById('lightbox-tip');
  const counterEl = document.getElementById('lightbox-counter');
  const prevBtn = document.getElementById('btn-lightbox-prev');
  const nextBtn = document.getElementById('btn-lightbox-next');
  const checkBtn = document.getElementById('btn-lightbox-check');

  if (badgeEl) badgeEl.textContent = `ขั้นตอนที่ ${step.stepNumber}`;
  if (titleEl) titleEl.textContent = step.title;
  if (imgEl) {
    imgEl.src = step.image;
    imgEl.alt = step.title;
    imgEl.classList.remove('scale-125', 'cursor-zoom-out');
    imgEl.classList.add('cursor-zoom-in');
    state.lightboxZoomed = false;
  }
  if (descEl) descEl.textContent = step.description;
  if (tipEl) {
    if (step.tip) {
      tipEl.textContent = `จุดสังเกต: ${step.tip}`;
      tipEl.classList.remove('hidden');
    } else {
      tipEl.classList.add('hidden');
    }
  }
  if (counterEl) {
    counterEl.textContent = `ภาพที่ ${state.lightboxIndex + 1} จาก ${state.lightboxSteps.length}`;
  }
  if (prevBtn) prevBtn.disabled = state.lightboxIndex === 0;
  if (nextBtn) nextBtn.disabled = state.lightboxIndex === state.lightboxSteps.length - 1;

  if (checkBtn) {
    const isDone = !!state.completedSteps[step.id];
    checkBtn.className = `px-3.5 py-2 rounded-xl text-xs font-bold border transition active:scale-95 inline-flex items-center gap-2 shrink-0 ${
      isDone
        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
    }`;
    checkBtn.innerHTML = `${isDone ? ICONS.checkCircle : ICONS.circle} <span>${
      isDone ? 'ทำเสร็จแล้ว (คลิกเพื่อยกเลิก)' : 'ติ๊กว่าทำขั้นตอนนี้แล้ว'
    }</span>`;
  }
}

// ============================================================================
// Cheat Sheet Modal Controls
// ============================================================================
function openCheatsheet() {
  state.cheatsheetOpen = true;
  document.getElementById('cheatsheet-backdrop')?.classList.remove('hidden');
}

function closeCheatsheet() {
  state.cheatsheetOpen = false;
  document.getElementById('cheatsheet-backdrop')?.classList.add('hidden');
}

// ============================================================================
// Offline Tracker (Section 6 Guidelines)
// ============================================================================
function updateOnlineStatus() {
  const badge = document.getElementById('offline-badge');
  if (!badge) return;
  if (navigator.onLine) {
    badge.classList.add('hidden');
  } else {
    badge.classList.remove('hidden');
    showToast('ขณะนี้คุณกำลังใช้งานในโหมดออฟไลน์');
  }
}

// ============================================================================
// Pull-to-Refresh for Mobile (Section 4C Guidelines)
// ============================================================================
function setupPullToRefresh() {
  let startY = 0;
  let pulling = false;
  let currentDrag = 0;

  const indicator = document.getElementById('ptr-indicator');
  const icon = document.getElementById('ptr-icon');
  const text = document.getElementById('ptr-text');

  window.addEventListener(
    'touchstart',
    (e) => {
      if (window.scrollY === 0 && !state.lightboxOpen && !state.cheatsheetOpen) {
        startY = e.touches[0].clientY;
        pulling = true;
        currentDrag = 0;
      }
    },
    { passive: true }
  );

  window.addEventListener(
    'touchmove',
    (e) => {
      if (!pulling) return;
      const diff = e.touches[0].clientY - startY;
      if (diff > 15 && window.scrollY === 0) {
        currentDrag = Math.min(diff, 120);
        if (indicator) {
          indicator.style.opacity = String(Math.min(currentDrag / 80, 1));
          indicator.style.transform = `translateY(${Math.min(currentDrag * 0.45, 48)}px)`;
        }
        if (icon && text) {
          if (currentDrag >= 80) {
            icon.style.transform = 'rotate(180deg)';
            text.textContent = 'ปล่อยเพื่อรีเฟรชคู่มือ';
          } else {
            icon.style.transform = 'rotate(0deg)';
            text.textContent = 'ดึงลงเพื่อรีเฟรชข้อมูล';
          }
        }
      }
    },
    { passive: true }
  );

  window.addEventListener(
    'touchend',
    () => {
      if (!pulling) return;
      pulling = false;
      if (indicator) {
        indicator.style.opacity = '0';
        indicator.style.transform = 'translateY(-48px)';
      }
      if (currentDrag >= 80) {
        triggerSkeletonTransition(() => {
          renderAll();
          showToast('รีเฟรชข้อมูลคู่มือล่าสุดเรียบร้อยแล้ว');
        });
      }
      currentDrag = 0;
    },
    { passive: true }
  );
}

// ============================================================================
// Utilities & Event Listeners
// ============================================================================
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function updateSearchClearButton() {
  const clearBtn = document.getElementById('btn-clear-search');
  const kbd = document.getElementById('search-kbd');
  if (state.searchQuery.trim().length > 0) {
    clearBtn?.classList.remove('hidden');
    kbd?.classList.add('hidden');
  } else {
    clearBtn?.classList.add('hidden');
    kbd?.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Check URL hash on load (e.g., #zwiz-ship)
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && MANUAL_CATEGORIES.some((c) => c.id === initialHash)) {
    state.activeCategoryId = initialHash;
  } else {
    state.activeCategoryId = null; // Default to Home Topic List
  }

  // Handle browser Back / Forward buttons
  window.addEventListener('popstate', () => {
    const hashId = window.location.hash.replace('#', '');
    if (hashId && MANUAL_CATEGORIES.some((c) => c.id === hashId)) {
      state.activeCategoryId = hashId;
    } else {
      state.activeCategoryId = null;
    }
    renderAll();
  });

  updateThemeUI();
  updateOnlineStatus();
  renderAll();
  loadChecklistState();
  setupPullToRefresh();

  // Brand Home Button
  document.getElementById('btn-brand-home')?.addEventListener('click', () => {
    goHomeList();
  });

  // Theme Toggles
  document.getElementById('btn-theme-desktop')?.addEventListener('click', toggleTheme);
  document.getElementById('btn-theme-mobile')?.addEventListener('click', toggleTheme);

  // View Mode Switchers
  document.getElementById('btn-view-grid')?.addEventListener('click', () => {
    if (state.viewMode !== 'grid') {
      state.viewMode = 'grid';
      triggerSkeletonTransition(() => renderAll());
    }
  });
  document.getElementById('btn-view-slide')?.addEventListener('click', () => {
    if (state.viewMode !== 'slide') {
      state.viewMode = 'slide';
      state.activeSlideIndex = 0;
      triggerSkeletonTransition(() => renderAll());
    }
  });

  // Search Input
  const searchInput = document.getElementById('search-input');
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    state.activeSlideIndex = 0;
    updateSearchClearButton();
    renderAll();
  });

  document.getElementById('btn-clear-search')?.addEventListener('click', () => {
    state.searchQuery = '';
    if (searchInput) searchInput.value = '';
    updateSearchClearButton();
    renderAll();
  });

  document.getElementById('btn-reset-empty')?.addEventListener('click', () => {
    goHomeList();
  });

  // Lightbox Events
  document.getElementById('lightbox-backdrop')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-container')?.addEventListener('click', (e) => e.stopPropagation());
  document.getElementById('btn-close-lightbox')?.addEventListener('click', closeLightbox);

  document.getElementById('btn-lightbox-prev')?.addEventListener('click', () => {
    if (state.lightboxIndex > 0) {
      state.lightboxIndex--;
      updateLightboxContent();
    }
  });
  document.getElementById('btn-lightbox-next')?.addEventListener('click', () => {
    if (state.lightboxIndex < state.lightboxSteps.length - 1) {
      state.lightboxIndex++;
      updateLightboxContent();
    }
  });
  document.getElementById('btn-lightbox-check')?.addEventListener('click', () => {
    const step = state.lightboxSteps[state.lightboxIndex];
    if (step) toggleStepCompleted(step.id, step.title);
  });
  document.getElementById('lightbox-image')?.addEventListener('click', (e) => {
    const img = e.currentTarget;
    state.lightboxZoomed = !state.lightboxZoomed;
    if (state.lightboxZoomed) {
      img.classList.add('scale-125', 'cursor-zoom-out');
      img.classList.remove('cursor-zoom-in');
    } else {
      img.classList.remove('scale-125', 'cursor-zoom-out');
      img.classList.add('cursor-zoom-in');
    }
  });

  // Cheatsheet Modal Events
  document.getElementById('btn-quick-cmd-desktop')?.addEventListener('click', openCheatsheet);
  document.getElementById('btn-quick-cmd-mobile')?.addEventListener('click', openCheatsheet);
  document.getElementById('cheatsheet-backdrop')?.addEventListener('click', closeCheatsheet);
  document.getElementById('cheatsheet-container')?.addEventListener('click', (e) => e.stopPropagation());
  document.getElementById('btn-close-cheatsheet')?.addEventListener('click', closeCheatsheet);
  document.getElementById('btn-GotIt-cheatsheet')?.addEventListener('click', closeCheatsheet);
  document.getElementById('btn-copy-command-modal')?.addEventListener('click', () => {
    copyQuickCommand('#รับยอด 100');
  });

  // Toast Undo Button
  document.getElementById('btn-toast-undo')?.addEventListener('click', () => {
    if (typeof state.undoAction === 'function') {
      state.undoAction();
      state.undoAction = null;
      document.getElementById('toast-container')?.classList.add('hidden');
    }
  });

  // Online / Offline Events
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  // Global Keyboard Shortcuts (Section 4A Guidelines)
  window.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement?.tagName?.toLowerCase();
    const isTyping = activeTag === 'input' || activeTag === 'textarea';

    if (e.key === 'Escape') {
      if (state.lightboxOpen) {
        closeLightbox();
      } else if (state.cheatsheetOpen) {
        closeCheatsheet();
      } else if (isTyping) {
        document.activeElement.blur();
      } else if (state.activeCategoryId !== null) {
        goHomeList();
      }
      return;
    }

    if (isTyping) return;

    if (e.key === '/') {
      e.preventDefault();
      searchInput?.focus();
      return;
    }

    if (state.lightboxOpen) {
      if (e.key === 'ArrowLeft' && state.lightboxIndex > 0) {
        state.lightboxIndex--;
        updateLightboxContent();
      } else if (e.key === 'ArrowRight' && state.lightboxIndex < state.lightboxSteps.length - 1) {
        state.lightboxIndex++;
        updateLightboxContent();
      } else if (e.key === 'Enter') {
        const step = state.lightboxSteps[state.lightboxIndex];
        if (step) toggleStepCompleted(step.id, step.title);
      }
      return;
    }

    if (state.viewMode === 'slide' && state.activeCategoryId !== null) {
      const steps = getFilteredSteps();
      if (e.key === 'ArrowLeft' && state.activeSlideIndex > 0) {
        state.activeSlideIndex--;
        renderStepsContent(steps);
      } else if (e.key === 'ArrowRight' && state.activeSlideIndex < steps.length - 1) {
        state.activeSlideIndex++;
        renderStepsContent(steps);
      }
    }
  });
});
