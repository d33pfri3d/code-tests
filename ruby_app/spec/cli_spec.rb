# frozen_string_literal: true

RSpec.describe Logger::CLI do
  subject(:cli) { described_class.new }

  spec_root = File.expand_path("..", __dir__)

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

  describe "#run" do
    context "when argument is a file path" do
      it "returns 0" do
        log_path = File.join(spec_root, "factories/example.log")
        expect(cli.run([log_path])).to eq(0)
      end
    end

    context "when no argument is provided" do
      it "returns 1" do
        expect(cli.run([])).to eq(1)
      end

      it "outputs help message" do
        cli.run(["unknown.log"])
        expect($stdout.string).to include("Usage:")
      end
    end
  end
end
