# класс для сортировки массива json

принимает 2 аргумента, массив json и объект опций
<br>
<code>
xAxis: string[];<br>
yAxis: string[];<br>
measures: string[];<br>
</code>

функцию aggregator, можно дописать для извлечения measures


так же, добавлен пример с массивом json :

<code>
[
{"Province": "Quebec", "Party": "NDP", "Age": 22, "Name": "Liu, Laurin", "Gender": "Female"},
{"Province": "Quebec", "Party": "Bloc Quebecois", "Age": 43, "Name": "Mourani, Maria", "Gender": "Female"},
....
]
</code>

<b>xAxisKeys</b> - количество ячеек по оси х 
<br>
<b>yAxisKeys</b> - количество ячеек по оси х

метод для извлечения данных: <code> .getDataXY(x,y) </code> <br> 
принимает агрументы: <code>.xAxisKeys[i], .yAxisKeys[j]</code>

