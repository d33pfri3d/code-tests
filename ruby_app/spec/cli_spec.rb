# frozen_string_literal: true

RSpec.describe Logger::CLI do
  subject(:cli) { described_class.new }

  before do
    @original_stderr = $stderr
    @original_stdout = $stdout
    $stdout = StringIO.new
    $stderr = StringIO.new
  end

  after do
    $stderr = @original_stderr
    $stdout = @original_stdout
    @original_stderr = nil
    @original_stdout = nil
  end

  describe "::run" do
    context "when argument is a file path" do
      it "returns 0" do
        log_path = "spec/factories/example.log"
        expect(cli.run([log_path])).to eq(0)
      end
    end
  end
end
