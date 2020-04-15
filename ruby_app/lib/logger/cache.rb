# The cache will a record of each of the entries and sort them out by Page Views and Uniqique views
# frozen_string_literal: true

module Logger
  class Cache
    def initialize
      @views = Hash.new { |h, k| h[k] = [] }
    end

    def new_page_view(page, ip)
      @views[page] << ip
    end

    def page_views
      @views
        .transform_values(&:size)
        .sort_by { |k, v| [-v, k] }
    end

    def unique_views
      @views
        .transform_values(&:uniq)
        .transform_values(&:size)
        .sort_by { |k, v| [-v, k] }
    end
  end
end
