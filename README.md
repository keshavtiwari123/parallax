# parallax jQuery plugin
## Parallax is an effect where the speed of a particular element is different than rest of the paelements or page.
To use ->
<script type='text/javascript' src='jquery.js'></script>   
<script type='text/javascript' src='parallax_plugin.js'></script>  
<script type='text/javascript'>  
  $(whose_scrolling_speed_has_to_changed).parallax_scroll(speed);  
</script>  

Now whose_scrolling_speed_has_to_change = '#id_name' OR '.class_name'  
valus of speed ranges from 0 to infinite.  
if speed is between 0 to 1 then the scrolling speed of the element will be slower than rest of the elements  
if speed > 1 than scrollimg peed will be faster.  

$('#my_div').parallax_scroll(0.5);
