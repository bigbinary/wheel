class AdditionService

  attr_reader :number1, :number2

  def initialize number1, number2
    @number1 = number1
    @number2 = number2
  end

  def process
    number1 + number2
  end

end
