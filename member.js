function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("member-skills");
  var memberSkillsButton = document.getElementById("member-skills-button");
  var memberSkillsClose = document.getElementById("member-skills-close");

  memberSkillsButton.addEventListener("click", function() {
    memberSkills.classList.add("member-skills--active");
    member.classList.add("member--active");
  });

  memberSkillsClose.addEventListener("click", function() {
    memberSkills.classList.remove("member-skills--active");
    member.classList.remove("member--active");
  });
}