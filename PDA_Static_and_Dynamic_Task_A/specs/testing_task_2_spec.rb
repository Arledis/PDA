require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class CardGameTest < MiniTest::Test
def setup
@card1 = Card.new("Hearts", 5)
@card2 =  Card.new("Diamonds", 6)
@card3 = Card.new("Spades", 1)
@cards = [@card1, @card2, @card3]
end


def test_check_for_ace
  assert_equal(false, CardGame.check_for_ace(@card1))
end

def test_highest_card
  assert_equal(@card2, CardGame.highest_card(@card1, @card2))
end

def test_total
assert_equal("You have a total of 12", CardGame.cards_total(@cards))
end
end
