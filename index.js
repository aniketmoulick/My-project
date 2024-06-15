var a=["img1.jpg","img2.jpg","img3.jpg"]
var b=document.queryselector ("img")
var count=0
function next()
{
        count++
       if (count>=a.length)
       {
            count=0
            b.src=a[count]
       }
else
      {
          b.src=a[count]
      }
}
function prev()
{
          count--
         if (count<0)
        {
           count=a.length-1
           b.src=a[count]
        }
}
else
       {
           b.src=a[count]
       }
}
