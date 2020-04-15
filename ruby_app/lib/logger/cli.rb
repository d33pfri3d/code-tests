# The CLI module is to handle all the command line interactions
# frozen_string_literal: true

module Logger
  class CLI
    SUCCESS = 0
    ERROR = 1

    class Error < StandardError; end

    def run(args = ARGV)
      print args
      start(args.first)
    rescue Error => e
      warn e.message
      help
      ERROR
    end

    private

    # Start method to take the path to the file and pass it to the parser module
    def start(log_path)
      cache = Cache.new
      Parser.new(log_path, cache).call
      report = Report.new(cache)
      report.output
      SUCCESS
    end

    def help
      puts "Usage: #{$PROGRAM_NAME} [LOG FILE PATH]"
    end
  end
end
