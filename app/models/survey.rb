class Survey < ApplicationRecord

	def self.q1_answers
    ['Usager des commerces ou des services', 'Habitant', 'Commerçant', 'Usager de la gare', 'Employé ou indépendant', 'Autre']
  end
  def self.q2_answers
    ['Au moins une fois par jour', 'Au moins une fois par semaine', 'Occasionnellement', 'Jamais']
  end
  def self.q3_answers
    ['Au moins une heure', 'Une demi journée']
  end
  def self.q4_answers
    ['marche', 'vélo', 'train', 'train', 'métro', 'voiture personnelle','covoiturage','Mobility','taxi','2 roues motorisé']
  end

	def self.to_csv
    attributes = %w{q1 q2 q3}

    CSV.generate(headers: true) do |csv|
      head = Array.new
      first.attributes.each do |attr_name, attr_value|
      	if attr_value.class == Hash
      		attr_value.each do |key,value|
      			head.push(attr_name+" "+key)
      		end
      	else
      		head.push(attr_name)
      	end
			end
			csv << head
      all.each do |answer|
      	answers = Array.new
        answer.attributes.each do |attr_name, attr_value|
        	if attr_value.class == Hash
      		attr_value.each do |key,value|
      			answers.push(value)
      		end
	      	else
	      		answers.push(attr_value)
	      	end
        end
        csv << answers
      end
    end
  end

  def name
    "#{first_name} #{last_name}"
  end
end
