# Parser takes the log file and parses through it.
# frozen_string_literal: true

module Logger
  class Parser
    def initialize(log_path, cache)
      @log_path = log_path
      @cache = cache
    end

    def call
      IO.foreach(@log_path) do |line|
        # Strip newline characters out from each line
        line.chomp!
        # Split the IP address and visitedpage
        page, ip = line.split
        # puts " IP: #{ip} visited page #{page}"
        # add a new page view to the cache
        @cache.new_page_view(page, ip)
      end
    end
  end
end
