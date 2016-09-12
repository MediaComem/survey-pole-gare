class Survey < ApplicationRecord

	def self.q1_answers
    ['Usager des commerces ou des services', 'Habitant', 'Commerçant', 'Usager de la gare', 'Employé ou indépendant', 'Autre']
  end
  def self.q2_answers
    ['Moins d’un an', '1 à 2 ans', '3 à 4 ans', '5 à 6 ans', 'Plus de 6 ans']
  end
  def self.q3_answers
    ['Au moins une fois par jour', 'Au moins une fois par semaine', 'Occasionnellement', 'Jamais']
  end
  def self.q4_answers
    ['Matin', 'Midi', 'Après-midi', 'Soir (après 17h)', 'Aucune']
  end
  def self.q5_answers
    ['Moins de 15mn', '15-30mn', '30mn à 2h', '½ journée', 'Plus d’1/2 journée']
  end
  def self.q6_answers
    ['marche','vélo','train','bus','métro','voiture personnelle','covoiturage','Mobility','taxi','2 roues motorisé', 'Autre']
  end
  def self.q7_answers
    ['Dans une rue du secteur','Dans une rue en dehors du secteur',',Parking privé','Parking du Simplon','Parking de la Coop','Autre']
  end
  def self.q9_answers
    ['Traverser','Shopping','Se promener','Se rencontrer & attendre','Manger sur le pouce','Autre']
  end
  def self.q10_answers
    ['Oui (enfants accompagnés)','Oui (enfants seuls)','Non','Se rencontrer & attendre','Manger sur le pouce','Autre']
  end
  def self.q41_answers
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
