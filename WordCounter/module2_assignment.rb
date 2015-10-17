class LineAnalyzer
  attr_reader :highest_wf_count, :content, :line_number

  def initialize(content, line_number)
    @content = content
    @line_number = line_number
    calculate_word_frequency
  end

  def calculate_word_frequency()
    words = Hash.new
    self.content.split.each do |word|
      words[word.downcase] += 1
    end
    highest_wf_count = words.keys.sort
  end

end

class Solution

  attr_reader :highest_count_across_lines, :highest_count_words_across_lines


  def analyze_file(file)
    @analyzers = Array.new
    line_num = 1
    f = File.open(file,'r')
    f.each_line do |line|
      @analyzers.push(LineAnalyzer.new(line, line_num))
      line_num += 1
    end
  end


 def calculate_line_with_highest_frequency()
   @highest_word_frequency_across_lines = Hash.new(0)
   @analyzers.each do |line|
      @highest_word_frequency_across_lines[line.highest_wf_words] = line.highest_wf_count
    end
   @highest_count_across_lines = @highest_word_frequency_across_lines.values.max
   @highest_count_words_across_lines = []
   h_c_w_a_l = []
   @print_highest_word_frequency_across_lines1.each do |words, times|
    h_c_w_a_l.push(words) if times == @highest_word_frequency_across_lines.values.max
   end
   h_c_w _a_l.each {|word| word.each {|new_n| @highest_count_words_across_lines.push(new_n)}}
end


  def print_highest_word_frequency_across_lines
  puts "The following words have highest frequency per line:"

  @highest_count_words_across_lines.each do |line_analyzer|
    puts "#{line_analyzer.highest_wf_words} (appears in line #{line_analyzer.line_number})"
  end
end
end
