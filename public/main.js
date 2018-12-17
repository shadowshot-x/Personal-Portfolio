<a href="https://codepen.io/ujjwal_sharma/"><li><i class="fa fa-codepen"></i> CodePen</li></a>
<a href="https://www.linkedin.com/in/ujjwal-sharma-b1066414b/"><li><i class="fa fa-linkedin-square"></i> LinkedIn</li></a>
<a href="https://github.com/shadowshot-x"><li><i class="fa fa-github"></i> Github</li></a>
<a href="https://www.freecodecamp.org/ujjwal_26"><li>(<i class="fa fa-fire"></i>) FreeCodeCamp</li></a>

<div class="container" id="revs">
  <form action="/collection1" method="POST" class="well">
    <h4>You can add Your reviews Here</h4>
    <div class="row">
    <span class="col-xs-3"><input type="text" placeholder=" Name " name="name" id="input1"></span>
    <span class="col-xs-9"><input type="text" placeholder=" Review" name="quote" size="50px" id="input2"></span>
    </div>
   <button type="submit" class="btn btn-primary"><i class="fa fa-thumbs-up"><nbsp>Submit</i></button>
    
  </form>
 </div>

<div class="container">
<ul class="collection1 well">
        
    <% for(var i=collection1.length-5; i<collection1.length ; i++) { %>
      <li class="collection1 li1">
       <b><i> <span class="names text text-uppercase"><%= collection1[i].name %></span></b></i> <br>
      <i><span class="reviews"> review : <%= collection1[i].quote %></span></i>
      </li>
    <% } %>
  </ul>
</div>