// viet function phan loai hoc sinh
//nhan diem la 1 so, output ra nhu sau
//diem > 8 -> 'xuat sac'
//7 <= diem <= 8 -> 'gioi'
//4<= diem <=6 -> 'kha'
//diem < 4 -> 'kem'

// ky thuat linh canh
//c1
function ClassifyStudent(mark) {
  let result;

  if (mark > 8) result = 'excellence';
  else if (mark >= 7) result = 'good';
  else if (mark >= 4) result = 'not good';
  else result = 'bad';

  return result;
}
//c2
function ClassifyStudent(mark) {
  if (mark < 0 || mark > 10) return '';
  let result = 'bad';
  if (mark > 8) result = 'excellence';
  else if (mark >= 7) result = 'good';
  else if (mark >= 4) result = 'not good';
  return result;
}

//c3
function ClassifyStudent(mark) {
  //validate arguments-kiem tra tham so dau vao
  if (mark < 0 || mark > 10) return 'not available';
  //main
  if (mark > 8) return 'excellence';
  if (mark >= 7) return 'good';
  if (mark >= 4) return 'not good';
  return 'bad';
}

console.log(ClassifyStudent(7));
