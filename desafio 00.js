a = [1,2,3];
b = [3,2,1];
c = [0,0];
cont = 0;

while (cont < a.length) {
  if(b[cont] == a[cont]) {
   cont ++;
  }
  if(b[cont] < a[cont]){
    c[0] = +1;
    cont++;
  }
  if(b[cont] > a[cont]){
    c[1] = +1;
    cont++
  }
}
print c ;