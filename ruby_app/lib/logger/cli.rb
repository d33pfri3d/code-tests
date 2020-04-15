# The CLI module is to handle all the command line interactions
# frozen_string_literal: true

module Logger
  class CLI
    def run(args = ARGV)
      print args
      start(args.first)
    rescue => e
      warn e.message
      help
    end

    private

    # Start method to take the path to the file and pass it to the parser module
    def start(log_path)
      cache = Cache.new
      Parser.new(log_path, cache).call
      report = Report.new(cache)
      report.output
    end

    def help
      puts ""
      puts "Usage:"
      puts "#{PROGRAM_NAME} [LOG FILE PATH]"
    end
  end
end
