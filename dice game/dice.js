
$(function(){
            let data = [
                {Name:"1", Photo:"images/dice1.jpeg"},
                {Name:"2", Photo:"images/dice2.jpeg"},
                {Name:"3", Photo:"images/dice3.jpeg"},
                {Name:"4", Photo:"images/dice4.jpeg"},
                {Name:"5", Photo:"images/dice5.jpeg"},
                {Name:"6", Photo:"images/dice6.jpeg"}
            ];

            $('#btnNew').click(()=>{debugger;
                
               
                holdUser1 = 0;
                holdUser2 = 0;
                current = 0;
                $('#current1').html('0');
                $('#current2').html('0'); 
                $('#score1').html('0');
                $('#score2').html('0');
               
               
            });
                current = 0;
                activeUser = 1; 
                holdUser1 = 0;
                holdUser2 = 0;
            
            $('#btnDice').click(()=>{
              
                window.photo = [];
                
                let randomNumber = Math.trunc(Math.random()*6+1);
                photo = data.filter(function(item){
                        return item.Name == randomNumber;
                });
               
                $('#image').attr('src',photo[0].Photo);
               
                if(randomNumber == 1){
                    $(`#current${activeUser}`).html(0);
                    $(`#score${activeUser}`).html(0);
                    current = 0;
                    //photo = [];

                    if(activeUser == 1){
                        //photo = [];
                        $(`#player${activeUser}`).removeClass('active-player');
                        activeUser = 2;
                        holdUser1 = 0;
                         
                        $(`#player${activeUser}`).addClass('active-player');
                    }else{
                        //photo = [];
                        $(`#player${activeUser}`).removeClass('active-player');
                        activeUser = 1;
                        holdUser2 = 0;
                        $(`#player${activeUser}`).addClass('active-player');
                        
                    }
                     
                }

                else{
                   total =  $(`#current${activeUser}`).html(randomNumber + current);
                    current = randomNumber + current;
                }
            })  
            
                        
            $('#btnHold').click(()=>{debugger;
                //photo = [];

               $(`#current${activeUser}`).html(0);
               
              if(activeUser == 1){

                
                $(`#player${activeUser}`).addClass('active');
                $(`#score${activeUser}`).html(current + holdUser1);
                holdUser1 =  holdUser1 + current  
                $(`#player${activeUser}`).removeClass('active-player');
                    activeUser = 2;
                    //photo = [];    
                    $(`#player${activeUser}`).addClass('active-player');
                
                
                }else{
                    $(`#player${activeUser}`).removeClass('active');
                    $(`#score${activeUser}`).html(current + holdUser2);
                    holdUser2 =  holdUser2 + current
                    $(`#player${activeUser}`).removeClass('active-player');  
                    activeUser = 1;
                    $(`#player${activeUser}`).addClass('active-player');
                    
                }
                
                // if(holdUser1 >= 20){
                    
                //     alert('congratulation player 1');
                //     $('#current1').html('0');
                //     $('#current2').html('0'); 
                //     $('#score1').html('0');
                //     $('#score2').html('0');
                                  
                
                // }else if(holdUser2 >= 20){
                //     alert('congratulation player 2')
                //     $('#current1').html('0');
                //     $('#current2').html('0'); 
                //     $('#score1').html('0');
                //     $('#score2').html('0');
                    
                // }
               
                current = 0;
                
              

                
            });
            

        
})
      
        
        
