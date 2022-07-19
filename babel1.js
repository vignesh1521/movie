const First = (props) =>{
  return(


<li className='con'>

<div className='container'>
<div className='avatar'>
  <img src={props.src}></img>
  <div className='details'>
<p>
  {props.title}

</p>

<div className='hd'>

	<a  href={props.href}>Download</a>

</div>
</div>
</div>
</div>

</li>
  )
  
}


const App = () => {
  return(
     <span>
         <First src='img/maamanithan.jpg'
          title='	maamanithan (2022) tamil movies  HD 720 watch online'  
          href='http://vidmx.xyz/yembed-og4omgms0bnh.html'
 
           />
           <First src='img/bestie.jpg'
          title=' bestie (2022) tamil movies  HD 720 watch online'  
          href='http://vidmx.xyz/embed-3wskdd68fzxx.html'
 
           />
           <First src='img/veetlavishesham.jpg'
          title=' veetla vishesham (2022) tamil movies  HD 720 watch online'  
          href='http://vidmx.xyz/embed-kf186sgcb7cy.html'
 
           />
     <First src='img/vikram.jpeg'
          title=' vikram (2022) tamil movies  HD 720 watch online'  
          href='http://vidmx.xyz/embed-62g253t7zk39.html'

           />
            <First src='img/don.jpeg'
          title=' don (2022) tamil movies  HD 720 watch online'  
          href='http://vidmx.xyz/embed-ej8zf2si0i95.html'
         
           />


    </span>
  )
      }


