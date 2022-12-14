document.addEventListener('DOMContentLoaded', function() {
			var calendarEl = document.getElementById('calendar');
			var calendar = new FullCalendar.Calendar(calendarEl, {
				  locale: "ko",
				  initialView: 'timeGridWeek',
				
				  headerToolbar: {
					left: 'prev,next today',
					center: 'title',
					right: 'timeGridWeek,timeGridDay addEventButton'
				  },
				customButtons: {
                    addEventButton: { // 추가한 버튼 설정
                        text : "일정 추가",  // 버튼 내용
                        click : function(){ // 버튼 클릭 시 이벤트 추가
							const modal = document.querySelector('.modal');
                            modal.style.display = "block"
                        }
                    }
                },
				  googleCalendarApiKey: ' ', // 해당 위치에 구글 캘린더 API 키 입력
				  events: {
				  googleCalendarId: ' ', // 해당 위치에 구글 캘린더 ID 입력
				  className: 'gcal-event' // an option!
				  },
				
													 
				  eventClick: function(info) {
					  let start_year = info.event.start.getUTCFullYear();
					  let start_month = info.event.start.getMonth() + 1;
					  let start_date = info.event.start.getUTCDate();
					  let start_hour = info.event.start.getHours();
					  let start_minute = info.event.start.getMinutes();
					  let start_second = info.event.start.getSeconds();
					  let end_hour = info.event.end.getHours();

					  let start = start_year + "-" + start_month + "-" + start_date + " " + start_hour + "시 ~ " + end_hour + "시";

					  let attends = "";
					  info.event.extendedProps.attachments.forEach(function(item) {
						  attends += "<div><a href='"+item.fileUrl+"' target='_blank'>[첨부파일]</a></div>"
					  });

					  if(!info.event.extendedProps.description) {
						  info.event.extendedProps.description = "";
					  }
					  let contents = `
						<div style='font-weight:bold; font-size:20px; margin-bottom:30px; text-align:center'>
							${start}
						</div>
						<div style='font-size:18px; margin-bottom:20px'>
							제목: ${info.event.title}
						</div>
						<div style='width:500px'>
							${info.event.extendedProps.description}
							${attends}
						</div>
					  `;
					  
					  $("#popup").html(contents);
					  $("#popup").bPopup({
						speed: 650,
						transition: 'slideIn',
						transitionClose: 'slideBack',
						position: [($(document).width()-500)/2, 30] //x, y
					  });
					  info.jsEvent.stopPropagation();
					  info.jsEvent.preventDefault();
					  
					  
				  }
				
			});
			calendar.render();
		});