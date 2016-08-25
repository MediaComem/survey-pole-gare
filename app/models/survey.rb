class Survey < ApplicationRecord
	def self.to_csv
    attributes = %w{q1 q2 q3}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |user|
        csv << attributes.map{ |attr| user.send(attr) }
      end
    end
  end

  def name
    "#{first_name} #{last_name}"
  end
end
