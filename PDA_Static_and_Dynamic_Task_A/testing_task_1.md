### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.



#no minitest require_relative requested
require_relative('card.rb')
class CardGame  #missing testing and NameError

# no setup function added with the instances of the class 'Card' or testing requested with MiniTest

  def checkforAce(card) # The function name it should "check_for_ace"
    if card.value = 1 # here the @ in the attribute "card" is missing
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #typo issue in 'dif' as it should be 'def' and a comma missing between the parameters.
  if card1.value > card2.value  
    return card.name  #undefined methods as 'name' should be 'suit'
  else
    card2  
  end
end
end  # syntax error due to an additional 'end'

def self.cards_total(cards)
  total   # total variable is no set '=  0'.
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
  #missing a return from the loop.
end


```
