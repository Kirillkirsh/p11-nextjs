export default function TestJSX(){
    const x = 10,
        arr = ['Alice', 'Bob', 'Sam'];
    return <fieldset>
        String:{'a'+'b'}<br/>

        Number:{1/7},{Infinity}, {NaN}<br/>

        Boolean:|{true},{false}|<br/>

        Условный рендеринг: {x>0&&'икс положительный'},

        {x<0&&'икс отрицательный'}<br/>

        Массив:{['str', 2+2,true,<input/>]}<br/>

        Список:
        <ol>
            {arr.map(item => <li key={item}> {item} </li>)}
        </ol>
    </fieldset>
}