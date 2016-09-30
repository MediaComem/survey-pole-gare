class Survey < ApplicationRecord

  def self.q1_answers
    ['Au moins une fois par jour', 'Au moins une fois par semaine', 'Occasionnellement', 'Jamais']
  end
	def self.q2_answers
    ['Usager des commerces ou des services', 'Habitant', 'Commerçant', 'Usager de la gare', 'Employé/Indépendant/Employeur']
  end
  def self.q3_answers
    ['Moins d’un an', '1 à 2 ans', '3 à 4 ans', '5 à 6 ans', 'Plus de 6 ans']
  end
  def self.q4_answers
    ['Matin', 'Midi', 'Après-midi', 'Soir (après 17h)']
  end
  def self.q5_answers
    ['Moins de 15mn', '15-30mn', '30mn à 2h', '1/2 journée', 'Plus de 1/2 journée']
  end
  def self.q6_answers
    ['Marche','Vélo','Train','Bus','Métro','Voiture personnelle','Covoiturage','Mobility','Taxi','2 roues motorisé']
  end
  def self.q7_answers
    ['Jamais en voiture','Dans une rue du secteur','Dans une rue en dehors du secteur','Parking privé','Parking du Simplon','Parking de la Coop','Autre']
  end
  def self.q11_answers
    ['Traverser','Shopping ou services','Se promener','Se rencontrer & attendre','Manger sur le pouce','Autre']
  end
  def self.q9_answers
    ['Aucune','Supermarchés','Petits commerces','Cafés','Restaurants','Marché','Associations','Santé','Sport et beauté','Autre']
  end
  def self.q101_answers
    ['Convivial','Villageois','Central','Calme','Bruyant','Animé','Bobo','Sympa','Sûr','Autre']
  end
  def self.q12_answers
    ['Non','Oui (enfants accompagnés)','Oui (enfants seuls)']
  end
  def self.q12a_answers
    ['Aller à l’école','Aller à la garderie','Aller à la gare','Se promener','Shopping','Autre']
  end
  def self.q13_answers
    ['L’ambiance est « villageoise », les habitants se connaissent','Les commerces sont variés','Les commerces sont proches','L’offre en transports publics est bonne','Le secteur est animé','Le secteur est convivial ','Le secteur est bruyant ','Les bâtiments sont beaux','La vue sur le grand paysage est belle','Il est facile d’y stationner']
  end
  def self.q14_answers
    ['Les aménagements piétons ','Les infrastructures cyclables ','La présence de la végétation ','Le trafic automobile','La sécurité','La propreté du secteur','La signalétique','L’éclairage public']
  end
  def self.q15_answers
    ['Accroître la présence de la végétation ','Améliorer l\'éclairage','Créer/développer des places et parcs publics','Développer les espaces piétons','Accroître les infrastructures cyclables','Développer la signalétique (métro, lac, musées)','Animer le quartier avec les commerçants et habitants','Réduire le trafic automobile','Autre']
  end
  def self.q16_answers
    ['Je ne sais pas','Oui, et j’en suis heureux','Oui, et je le regrette','Non, et j’en suis heureux','Non, et je le regrette']
  end
  def self.q17_answers
    ['Oui','Non']
  end
  def self.q17a_answers
    ['Projet Léman 2030','Nouvelle place dite "des Saugettes"','Plateforme10 (pôle muséal)','Projet Rasude','Nouveau métro M3','Démolitions','Autre']
  end
  def self.q17b_answers
    ['Enthousiaste','Confiant','Indifférent','Méfiant','Opposé']
  end
  def self.q19_answers
    ['Femme','Homme']
  end
  def self.q20_answers
    ['- de 18 ans','de 18 à 29 ans','de 30 à 39 ans','de 40 à 49 ans','de 50 à 64 ans','de 65 à 80 ans','+ de 80 ans']
  end
  def self.q21_answers
    ['1','2','3','4','5','Plus de 5']
  end
  def self.q22_answers
    ['Pas d\'enfant','1','2','3','4','Plus de 4']
  end
  def self.q22a_answers
    ['- de 5 ans','de 5 à 10 ans','de 11 à 15 ans','de 16 à 18 ans','+ de 18 ans']
  end
  def self.q23_answers
    ['Oui','Non']
  end
  def self.q24_answers
    ['Dirigeant','Profession libérale','Indépendant','Profession intellectuelle et d’encadrement','Profession intermédiaire','Employé','Ouvrier','Travailleur non-qualifié','Apprenti','Etudiant','Retraité','Au foyer','Sans emploi','Autre']
  end
  def self.q25_answers
    ['Pas de conjoint','Dirigeant','Profession libérale','Indépendant','Profession intellectuelle et d’encadrement','Profession intermédiaire','Employé','Ouvrier','Travailleur non-qualifié','Apprenti','Etudiant','Retraité','Au foyer','Sans emploi','Autre']
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
          if(attr_name != "ip_adress" && attr_name != "user_agent")
      		  head.push(attr_name)
          end
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
            if(attr_name != "ip_adress" && attr_name != "user_agent")
	      		 answers.push(attr_value)
            end
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
