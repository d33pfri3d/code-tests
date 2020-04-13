# Parser takes the log file and parses through it.
# frozen_string_literal: true

module Logger

  class Parser

    def initialize(log_path)
      @log_path = log_path
    end

    def call
      IO.foreach(@log_path) do |line|
        print "line :: #{line}"
      end
    end

  end

end