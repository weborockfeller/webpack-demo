import _ from 'lodash';
import './style.css';
import Conditioner from './conditioner.jpg'
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div 
    const myConditioner = new Image();
    myConditioner.src = Conditioner;
    myConditioner.style = 'display:block';
    element.appendChild(myConditioner);
    // 安装了相应的loader以后 数据可以直接被解析
    console.log(Data);

    return element;
}
  
document.body.appendChild(component());